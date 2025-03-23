import connectDB from '@/config/database';
import Property from '@/models/Property';
import Image from 'next/image';
import React from 'react';

type Props = {
  userId: string;
};

async function ProfileListings({ userId }: Props) {
  await connectDB();

  if (!userId) {
    return (
      <div className="md:w-3/4 md:pl-4 flex justify-center items-center h-32">
        <div className="w-6 h-6 border-4 border-t-transparent border-white rounded-full animate-spin" />
      </div>
    );
  }
  console.log(userId);
  const properties = await Property.find({ owner: userId }).lean();
  console.log(properties);
  return (
    <div className="md:w-3/4 md:pl-4">
      <h2 className="text-xl font-semibold mb-4">Your Listings</h2>
      {properties.map((property: any, idx) => {
        return (
          <div key={property._id + idx} className="mb-10">
            <a href="/property.html">
              <Image
                className="h-32 w-full rounded-md object-cover"
                width={0}
                height={32}
                sizes="100vw"
                src={property?.images[0] ?? '/images/properties/a1.jpg'}
                alt="Property 1"
              />
            </a>
            <div className="mt-2">
              <p className="text-lg font-semibold">{property?.name}</p>
              <p className="text-gray-600">
                Address: {property?.location?.street} {property?.location?.city} {property?.location?.state}
              </p>
            </div>
            <div className="mt-2">
              <a
                href="/add-property.html"
                className="bg-blue-500 text-white px-3 py-3 rounded-md mr-2 hover:bg-blue-600"
              >
                Edit
              </a>
              <button className="bg-red-500 text-white px-3 py-2 rounded-md hover:bg-red-600" type="button">
                Delete
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default ProfileListings;
