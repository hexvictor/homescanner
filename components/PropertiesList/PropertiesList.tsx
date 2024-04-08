import React from "react";
import PropertyCard from "./PropertyCard";
import { type PropertyProps } from "./types";

const PropertiesList = ({ properties }: any) => {
  const isEmpty = properties.length === 0;
  return isEmpty ? (
    <p>No properties found</p>
  ) : (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {properties.map((property: PropertyProps) => {
        return <PropertyCard key={property._id} {...property} />;
      })}
    </div>
  );
};

export default PropertiesList;
