import { useSession } from 'next-auth/react';
import Image from 'next/image';
import React from 'react';
import profileDefault from '@/assets/images/profile.png';
import { LoadingText } from '@/components/ui/LoadingText';
import { ProfileListings } from '@/components/profile/ProfileListings';
import getSessionUser from '@/utils/getSessionUser';

async function Profile() {
  const user = await getSessionUser();

  if (!user?.id) {
    throw new Error('User ID is required');
  }

  const userName = user?.name;
  const userEmail = user?.email;
  const userImage = user?.image;
  const userId = user?.id;

  return (
    <section className="bg-blue-50">
      <div className="container m-auto py-24">
        <div className="bg-white px-6 py-8 mb-4 shadow-md rounded-md border m-4 md:m-0">
          <h1 className="text-3xl font-bold mb-4">Your Profile</h1>
          <div className="flex flex-col md:flex-row">
            <div className="md:w-1/4 mx-20 mt-10">
              <div className="mb-4">
                <Image
                  className="h-32 w-32 md:h-48 md:w-48 rounded-full mx-auto md:mx-0"
                  src={userImage ?? profileDefault}
                  width={200}
                  height={200}
                  alt="User"
                />
              </div>
              <h2 className="text-2xl mb-4">
                <span className="font-bold block">Name: </span> {userName ?? 'user_name_error'}
              </h2>
              <h2 className="text-2xl">
                <span className="font-bold block">Email: </span> {userEmail ?? 'user_email_error'}
              </h2>
            </div>

            <ProfileListings userId={user?.id} />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Profile;
