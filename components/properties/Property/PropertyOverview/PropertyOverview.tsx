import React from 'react';
import PropertyRates from '../PropertyRates/PropertyRates';
import { PropertyDetails } from '../PropertyDetails';
import { PropertyLocation } from '../PropertyLocation';
import { type PropertyProps } from '@/types/property';
import { PropertyImages } from '../PropertyImages';

const PropertyOverview = ({ property }: PropertyProps): React.ReactElement => {
  return (
    <main>
      <div className="bg-white p-6 rounded-lg shadow-md text-center md:text-left">
        <div className="text-gray-500 mb-4">{property.type}</div>
        <h1 className="text-3xl font-bold mb-4">{property.name}</h1>
        <PropertyLocation location={property.location} />

        <PropertyRates rates={property.rates} />
      </div>

      <PropertyDetails property={property} />

      <div className="bg-white p-6 rounded-lg shadow-md mt-6">
        <div id="map"></div>
      </div>

      <PropertyImages images={property.images} />
    </main>
  );
};

export default PropertyOverview;
