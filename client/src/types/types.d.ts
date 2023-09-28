declare module 'uiTypes'{
  interface LandlordResponse {
    landlords: Landlord[] | null;
    total: number;
    status: string;
  }
  
  interface Landlord {
    id: string;
    email: string;
    acceptanceRate: number;
    activeAdsNumber: number;
    inactiveAdsNumber: number;
    adsInProgressNumber: number;
    commission: number;
    confirmedBookingsNumber: number;
    firstName: string;
    lastLogin: string | number | null;
    lastName: string;
    phoneNumber: string | null;
    registrationDate: string;
    responseRate: number;
    nationality: string;
    countries?: string[];
    firstActivelistingDate?: string;
    lastListingPostedDate?: string;
    language?: string;
    properties: Property[];
  }
  
  interface Property {
    id: string;
    internalName: string;
    finished: boolean;
    validated: boolean;
    disabled: boolean;
    address?: string;
    rooms: Room[];
  }
  
  interface Room {
    id: string;
    internalName: string;
    finished: boolean;
    validated: boolean;
    disabled: boolean;
    roomLevel: string;
  }

}

