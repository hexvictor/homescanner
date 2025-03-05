import PropertyCard from '@/components/PropertyCard/PropertyCard';
import Property, {type IProperty} from '@/models/Property';
import React from 'react';

const RecentProperties = async (): Promise<React.ReactElement> => {
  const recentProperties: IProperty[] = await Property.find({}).sort({createdAt: -1}).limit(3);

  return (
    <div className="container-xl lg:container m-auto px-4 py-6">
      <h2 className="text-3xl font-bold text-blue-500 mb-6 text-center">Recent Properties</h2>
      {recentProperties.length === 0 ? (
        <p>No properties found</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {recentProperties.map((property: IProperty) => (
            <PropertyCard key={property._id.toString()} property={property} />
          ))}
        </div>
      )}
    </div>
  );
};

export default RecentProperties;
