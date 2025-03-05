import {authSlice, selectAuthSuccess, useDispatch, useSelector} from '@/lib/redux';
import Link from 'next/link';
import {usePathname} from 'next/navigation';
import React from 'react';
import {FaGoogle} from 'react-icons/fa';

const MobileNavbarMenu = () => {
  const dispatch = useDispatch();
  const loggedIn = useSelector(selectAuthSuccess);
  const pathname = usePathname();
  return (
    <div id="mobile-menu">
      <div className="space-y-1 px-2 pb-3 pt-2">
        <Link
          href="/"
          className={`${
            pathname === '/' ? 'bg-black text-white' : 'text-gray-300'
          } hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium`}
        >
          Home
        </Link>
        <Link
          href="/properties"
          className={`${
            pathname === '/properties' ? 'bg-black text-white' : 'text-gray-300'
          } hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium`}
        >
          Properties
        </Link>
        {loggedIn && (
          <Link
            href="/properties/add"
            className={`${
              pathname === '/properties/add' ? 'bg-black text-white' : 'text-gray-300'
            } hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium`}
          >
            Add Property
          </Link>
        )}
        {!loggedIn && (
          <button
            type="button"
            className="flex items-center text-white bg-gray-700 hover:bg-gray-900 hover:text-white rounded-md px-3 py-2 my-4"
            onClick={() => dispatch(authSlice.actions.signIn())}
          >
            <FaGoogle className="text-white mr-2" />
            <span>Login or Register</span>
          </button>
        )}
      </div>
    </div>
  );
};

export default MobileNavbarMenu;
