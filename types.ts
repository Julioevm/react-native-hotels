interface Location {
  address: string;
  city: string;
  latitude: number;
  longitude: number;
}

interface TimeSpan {
  from: string;
  to: string;
}

interface Contact {
  phoneNumber: string;
  email: string;
}

export interface Hotel {
  id: string;
  name: string;
  location: Location;
  stars: number;
  checkIn: TimeSpan;
  checkOut: TimeSpan;
  contact: Contact;
  gallery: string[];
  userRating: number;
  price: number;
  currency: string;
}

export type RootStackParamList = {
  Hotels: undefined;
  Details: {hotel: Hotel};
  Sort: undefined;
};
