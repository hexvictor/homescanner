import { PropertiesList } from '@/components/PropertiesList';
import connectDB from '@/config/database';
import Property, { type IProperty } from '@/models/Property';
import React from 'react';

const PropertiesPage = async (): Promise<React.ReactElement> => {
  await connectDB();

  const properties: IProperty[] = await Property.find({}).lean<IProperty[]>();

  return (
    <section className="px-4 py-6">
      <div className="container-xl lg:container m-auto px-4 py-6">
        <PropertiesList properties={properties} />
      </div>
    </section>
  );
};

export default PropertiesPage;
