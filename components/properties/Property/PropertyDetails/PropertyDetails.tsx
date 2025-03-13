import { type PropertyProps } from '@/types/property';
import React from 'react';
import { FaBath, FaBed, FaCheck, FaRulerCombined } from 'react-icons/fa';

const PropertyDetails = ({ property }: PropertyProps): React.ReactElement => {
  return (
    <>
      <div className="bg-white p-6 rounded-lg shadow-md mt-6">
        <h3 className="text-lg font-bold mb-6">Description & Details</h3>
        <div className="flex justify-center gap-4 text-blue-500 mb-4 text-xl space-x-9">
          <div className="inline-flex items-center gap-2">
            <FaBed /> {property.beds}
            <span className="hidden sm:inline">Beds</span>
          </div>
          <div className="inline-flex items-center gap-2">
            <FaBath /> {property.baths}
            <span className="hidden sm:inline">Baths</span>
          </div>
          <div className="inline-flex items-center gap-2">
            <FaRulerCombined />
            {property.square_feet.toLocaleString()} <span className="hidden sm:inline">sqft</span>
          </div>
        </div>
        <p className="text-gray-500 mb-4">{property.description}</p>
      </div>

      <div className="bg-white p-6 rounded-lg shadow-md mt-6">
        <h3 className="text-lg font-bold mb-6">Amenitiess</h3>

        <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 list-none">
          {property.amenities?.map((amenity, index) => (
            <li key={amenity + '-' + index} className="inline-flex items-center gap-2">
              <span className="text-2xl font-bold text-green-500">
                <FaCheck />
              </span>
              {amenity}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default PropertyDetails;
