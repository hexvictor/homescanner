import { PropertiesList } from "@/components/PropertiesList";
import connectDB from "@/config/database";
import Property from "@/models/Property";
import React from "react";

const PropertiesPage = async (): Promise<React.ReactElement> => {
  await connectDB();

  const properties = await Property.find({}).lean();

  return (
    <section className="px-4 py-6">
      <div className="container-xl lg:container m-auto px-4 py-6">
        <PropertiesList properties={properties} />
      </div>
    </section>
  );
};

export default PropertiesPage;
