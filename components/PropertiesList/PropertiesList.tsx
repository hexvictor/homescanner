import React from 'react';
import { PropertyCard } from '../PropertyCard';
import type { IProperty } from '@/models/Property';

type PropertiesListProps = {
  properties: IProperty[];
};
const PropertiesList = ({ properties }: PropertiesListProps) => {
  const isEmpty = properties.length === 0;
  return isEmpty ? (
    <p>No properties found</p>
  ) : (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {properties.map((property: IProperty) => {
        return <PropertyCard key={property._id.toString()} property={property} />;
      })}
    </div>
  );
};

export default PropertiesList;
