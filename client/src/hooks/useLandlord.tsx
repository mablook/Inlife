import { useState, useEffect } from 'react';
import { Landlord } from 'uiTypes';

interface UseLandlordsProps {
  initialLandlords: Landlord[];
  searchQuery: string;
}

const useLandlords = ({ initialLandlords, searchQuery }: UseLandlordsProps) => {
  const [landlords, setLandlords] = useState<Landlord[]>(initialLandlords);


  useEffect(() => {
        const filteredLandlords = initialLandlords.filter((landlord: Landlord) => {
            return landlord?.firstName?.toLowerCase().includes(searchQuery.toLowerCase());
          });
          setLandlords(filteredLandlords);

  }, [initialLandlords, searchQuery]);

  return landlords;
};

export default useLandlords;