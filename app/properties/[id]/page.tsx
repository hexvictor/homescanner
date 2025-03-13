import { PropertyOverview } from '@/components/properties/Property/PropertyOverview';
import PropertyHeaderImage from '@/components/properties/Property/PropertyHeaderImage/PropertyHeaderImage';
import connectDB from '@/config/database';
import Property, { type IProperty } from '@/models/Property';
import Link from 'next/link';
import React from 'react';
import { FaArrowLeft } from 'react-icons/fa';

type Props = {
  params: Promise<{ id: string }>;
};

const PropertyPage = async ({ params }: Props) => {
  const { id } = await params;
  // ✅ Ensure params are available
  if (!id) {
    return <div>Property not found</div>; // Prevents undefined errors
  }

  await connectDB();

  let property: IProperty | null = null;
  try {
    property = await Property.findById(id).lean<IProperty>();
  } catch (error) {
    console.error('Error fetching property:', error);
    return <div>Failed to load property</div>;
  }

  return (
    <>
      <PropertyHeaderImage image={property?.images?.[0]} />
      <section>
        <div className="container m-auto py-6 px-6">
          <Link href="/properties" className="text-blue-500 hover:text-blue-600 flex items-center">
            <FaArrowLeft className="mr-2" /> Back to Properties
          </Link>
        </div>
      </section>

      {/* Property Info */}
      <section className="bg-blue-50 flex-1">
        <div className="container m-auto py-10 px-6">
          <div className="grid grid-cols-1 md:grid-cols-70/30 w-full gap-6">
            {property ? <PropertyOverview property={property} /> : 'Property not found'}
          </div>
        </div>
      </section>
    </>
  );
};

export default PropertyPage;
