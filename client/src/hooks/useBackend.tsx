import { useState, useEffect } from 'react';
import { LandlordResponse } from 'uiTypes';


export const useBackend = () => {
    const [data, setData] = useState<LandlordResponse | null>(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<Error | null>(null);

useEffect(() => {
    const fetchData = async () => {
        setLoading(true);
        try {
            const response = await fetch(`${process.env.REACT_APP_API_URL}/api/landlord`);
            const _data = await response.json();
            setData(_data.landlords[0]);
        } catch (error: any) {
            setError(error);
        } finally {
            setLoading(false);
        }
    };
    fetchData();
}, []);

    return { data, loading, error };
};