'use client';

import { useAuthStore } from '@/store/authStore';
import { type BuiltInProviderType } from 'next-auth/providers/index';
import { type ClientSafeProvider, type LiteralUnion } from 'next-auth/react';
import { FaGoogle } from 'react-icons/fa';

type ProvidersConfig = Partial<
  Record<
    LiteralUnion<BuiltInProviderType, string>,
    {
      label: string;
      icon: React.ReactNode;
    }
  >
>;

const providersConfig: ProvidersConfig = {
  google: {
    label: 'Login or Register',
    icon: <FaGoogle className="text-white mr-2" />,
  },
};

export default function ProvidersSignInButtons(): React.ReactElement {
  const authProviders = useAuthStore(state => state.authProviders);
  const signIn = useAuthStore(state => state.signIn);

  return (
    <>
      {authProviders &&
        Object.values(authProviders).map((provider: ClientSafeProvider, index) => {
          const providerConfig = providersConfig[provider.id];

          return (
            <button
              key={provider.id + index}
              type="button"
              className="flex items-center text-white bg-gray-700 hover:bg-gray-900 hover:text-white rounded-md px-3 py-2"
              onClick={() => {
                void signIn(provider.id);
              }}
            >
              {providerConfig?.icon}
              <span>{providerConfig?.label}</span>
            </button>
          );
        })}
    </>
  );
}
