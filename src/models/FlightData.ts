export interface FlightData {
    Flight: {
      // Define the properties of the Flight object
      // Adjust these based on the actual structure of your data
      // For example:
      "@type": string;
      distance: number;
      duration: string;
      carrier: string;
      number: string;
      equipment: string;
      id: string;
      Departure: {
        "@type": string;
        location: string;
        date: string;
      };
    }[];
  }