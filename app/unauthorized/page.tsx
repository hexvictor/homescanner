import Link from 'next/link';
import { FaExclamationTriangle } from 'react-icons/fa';

const UnauthorizedPage = () => {
  return (
    <section className="bg-blue-50 flex-1 flex-grow">
      <div className="container m-auto max-w-2xl py-24">
        <div className="bg-white px-6 py-24 mb-4 shadow-md rounded-md border m-4 md:m-0">
          <div className="flex justify-center">
            <FaExclamationTriangle className="text-yellow-400 text-8xl fa-5x" />
          </div>
          <div className="text-center">
            <h1 className="text-3xl font-bold mt-4 mb-2">Access Denied</h1>
            <p className="text-gray-500 text-xl mb-10">
              You need to <span className="font-semibold">log in</span> to view this page.
            </p>
            <div className="flex justify-center gap-4">
              <Link
                href="/api/auth/signin"
                className="bg-green-600 hover:bg-green-700 text-white font-bold py-4 px-6 rounded"
              >
                Log In
              </Link>
              <Link href="/" className="bg-blue-700 hover:bg-blue-800 text-white font-bold py-4 px-6 rounded">
                Go Home
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="flex-grow"></div>
    </section>
  );
};

export default UnauthorizedPage;
