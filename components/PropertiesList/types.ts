interface PropertyRate {
  weekly?: number;
  monthly?: number;
  nightly?: number;
}

interface PropertyLocation {
  street?: string;
  city?: string;
  state?: string;
  zipcode?: string;
}
export interface PropertyProps {
  _id: string;
  images: string[];
  type: string;
  name: string;
  beds: number;
  baths: number;
  square_feet: number;
  rates: PropertyRate;
  location: PropertyLocation;
}
