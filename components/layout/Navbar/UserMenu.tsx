import Link from 'next/link';
import React from 'react';
import Image from 'next/image';
import ProfileMenu from './ProfileMenu';
import profileDefault from '@/assets/images/profile.png';
import { type Session } from 'next-auth';
import { useNavbarStore } from '@/store/navbarStore';
import { useShallow } from 'zustand/shallow';
import { ProvidersSignInButtons } from './ProvidersSignInButtons';
import { useAuthStore } from '@/store/authStore';
import { useSession } from 'next-auth/react';

type UserMenuProps = {
  session: Session | null;
};

function UserMenu({ session }: UserMenuProps): React.ReactElement {
  if (session) {
    return <UserMenuLoggedIn session={session} />;
  } else {
    return <UserMenuLoggedOut />;
  }
}

function UserMenuLoggedIn({ session }: UserMenuProps): React.ReactElement {
  const { profileMenuOpen, toggleProfileMenu } = useNavbarStore(
    useShallow(state => ({ profileMenuOpen: state.profileMenuOpen, toggleProfileMenu: state.toggleProfileMenu }))
  );
  return (
    <div className="absolute inset-y-0 right-0 flex items-center pr-2 md:static md:inset-auto md:ml-6 md:pr-0">
      <Link href="/messages" className="relative group">
        <button
          type="button"
          className="relative rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
        >
          <span className="absolute -inset-1.5" />
          <span className="sr-only">View notifications</span>
          <svg
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0"
            />
          </svg>
        </button>
        <span className="absolute top-0 right-0 inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-white transform translate-x-1/2 -translate-y-1/2 bg-red-600 rounded-full">
          2{/* <!-- Replace with the actual number of notifications --> */}
        </span>
      </Link>
      {/* <!-- Profile dropdown button --> */}
      <div className="relative ml-3">
        <div>
          <button
            type="button"
            className="relative flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
            id="user-menu-button"
            aria-expanded="false"
            aria-haspopup="true"
            onClick={() => {
              toggleProfileMenu();
            }}
          >
            <span className="absolute -inset-1.5" />
            <span className="sr-only">Open user menu</span>
            <Image
              className="h-8 w-8 rounded-full"
              width={32}
              height={32}
              src={session?.user?.image ?? profileDefault}
              alt=""
            />
          </button>
        </div>

        {/* <!-- Profile dropdown --> */}
        {profileMenuOpen && <ProfileMenu />}
      </div>
    </div>
  );
}

function UserMenuLoggedOut(): React.ReactElement {
  return (
    <div className="hidden md:block md:ml-6">
      <div className="flex items-center">
        <ProvidersSignInButtons />
      </div>
    </div>
  );
}

export default UserMenu;
