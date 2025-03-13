import Link from 'next/link';
import connectDB from '@/config/database';
import { RecentProperties } from '../RecentProperties';

const HomeProperties = async (): Promise<React.ReactElement> => {
  await connectDB();

  return (
    <>
      <section className="px-4 py-6">
        <RecentProperties />
      </section>

      <section className="m-auto max-w-lg my-10 px-6">
        <Link
          href="/properties"
          className="block w-full bg-black text-white py-3 rounded-xl hover:bg-gray-700 text-center"
        >
          View All Properties
        </Link>
      </section>
    </>
  );
};

export default HomeProperties;
