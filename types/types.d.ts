    interface Room {
        id: string;
        internalName: string;
        finished: boolean;
        validated: boolean;
      }
      
      interface Property {
        id: string;
        internalName: string;
        finished: boolean;
        validated: boolean;
        disabled: boolean;
        rooms: Room[];
      }
      
      interface Landlord {
        id: string;
        email: string;
        acceptanceRate: number;
        activeAdsNumber: number;
        inactiveAdsNumber: number;
        commission: number;
        confirmedBookingsNumber: number;
        firstActivelistingDate: string;
        firstName: string;
        lastListingPostedDate: string;
        lastLogin: number;
        lastName: string;
        phoneNumber: string | null;
        registrationDate: string;
        responseRate: number;
        nationality: string;
        properties: Property[];
      }
      
  export interface LandlordResponse {
        landlords: Landlord[];
        status: string;
        total: number;
      }
