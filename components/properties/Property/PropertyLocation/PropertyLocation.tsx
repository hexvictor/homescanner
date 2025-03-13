import React from 'react';
import { FaMapMarker } from 'react-icons/fa';

type PropertyLocationProps = {
  location?: {
    street?: string | undefined;
    city?: string | undefined;
    state?: string | undefined;
    zipcode?: string | undefined;
  };
};

const PropertyLocation = ({ location }: PropertyLocationProps): React.ReactElement => {
  return (
    <div className="text-gray-500 mb-4 flex items-center gap-2 justify-center md:justify-start">
      <FaMapMarker className="text-orange-700" />
      <p className="text-orange-700">
        {location?.street} {location?.city} {location?.state} {location?.zipcode}
      </p>
    </div>
  );
};

export default PropertyLocation;
