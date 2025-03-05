import { PropertyOverview } from "@/components/Property/PropertyOverview";
import PropertyHeaderImage from "@/components/Property/PropertyHeaderImage/PropertyHeaderImage";
import connectDB from "@/config/database";
import Property from "@/models/Property";
import Link from "next/link";
import React from "react";
import { FaArrowLeft } from "react-icons/fa";

const PropertyPage = async ({ params }): Promise<React.ReactElement> => {
  await connectDB();
  const property = await Property.findById(params.id).lean();
  return (
    <>
      <PropertyHeaderImage image={property.images[0]} />
      <section>
        <div className="container m-auto py-6 px-6">
          <Link
            href="/properties"
            className="text-blue-500 hover:text-blue-600 flex items-center"
          >
            <FaArrowLeft className="mr-2" /> Back to Properties
          </Link>
        </div>
      </section>

      {/* Property Info */}
      <section className="bg-blue-50">
        <div className="container m-auto py-10 px-6">
          <div className="grid grid-cols-1 md:grid-cols-70/30 w-full gap-6">
            <PropertyOverview property={property} />
          </div>
        </div>
      </section>
    </>
  );
};

export default PropertyPage;
