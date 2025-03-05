import React from "react";
import { FaMapMarker } from "react-icons/fa";

const PropertyLocation = ({ location }): React.ReactElement => {
  return (
    <div className="text-gray-500 mb-4 flex items-center gap-2 justify-center md:justify-start">
      <FaMapMarker className="text-orange-700" />
      <p className="text-orange-700">
        {location.street} {location.city} {location.zipcode}
      </p>
    </div>
  );
};

export default PropertyLocation;
