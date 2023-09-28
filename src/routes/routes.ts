import express from 'express';
import dotenv from 'dotenv';
import { LandlordResponse } from '../../types/types';

dotenv.config(); 

const router = express.Router();

let cachedResponse: LandlordResponse | null = null;
let cacheExpiration: number | null = null;

const CACHE_DURATION = Number(process.env.CACHE_TIME) || 3600;

const fetchLandlords = async (): Promise<LandlordResponse> => {
  const response = await fetch(`${process.env.API_ENDPOINT}?key=${process.env.API_KEY}`);
  const data = await response.json();
  if (Array.isArray(data) && data.length === 1 && data[0].status === 'error' && data[0].error?.name === 'RateLimitError') {
    if (cachedResponse) {
      return cachedResponse;
    } else {
      throw new Error('Too many requests. Please try again later.');
    }
  } else {
    const landlords = Array.isArray(data) ? data : [data];
    const status = 'success';
    const total = landlords.length;
    const landlordResponse: LandlordResponse = { landlords, status, total };
    cachedResponse = landlordResponse;
    cacheExpiration = Date.now() + CACHE_DURATION;
    return landlordResponse;
  }
};

router.get('/api/landlord', async (req, res) => {
  try {
    if (cachedResponse && cacheExpiration && Date.now() < cacheExpiration) {
      res.status(200).json(cachedResponse);
    } else {
      const landlordResponse = await fetchLandlords();
      res.status(200).json(landlordResponse);    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

router.use('*', (req, res) => {
  res.status(404).json({ error: 'Not Found' });
});

export default router;