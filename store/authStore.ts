import { create } from 'zustand';
import { persist, devtools } from 'zustand/middleware';
import { signIn, signOut, type ClientSafeProvider, getProviders } from 'next-auth/react';

// 1. Define Initial State
const initState: AuthState = {
  session: null,
  authLoading: false,
  authProviders: null,
};

// 2. Create Zustand Store
export const useAuthStore = create<AuthState & AuthActions>()(
  devtools(
    persist(
      set => ({
        ...initState,

        // ✅ Reset the store
        resetAuthStore: () => {
          set({ ...initState }, false, 'resetAuthStore');
        },

        // ✅ Set authentication providers
        setProviders: providers => {
          set({ authProviders: providers }, false, 'setProviders');
        },

        // ✅ Fetch authentication providers from NextAuth
        fetchProviders: async () => {
          try {
            const res = await getProviders();
            set({ authProviders: res }, false, 'fetchProviders');
          } catch (error) {
            console.error('Error fetching auth providers:', error);
          }
        },

        // ✅ Sign in with a provider (default to 'google')
        signIn: async (provider = 'google') => {
          set({ authLoading: true }, false, 'signIn');
          try {
            await signIn(provider);
          } catch (error) {
            console.error('Login failed:', error);
          } finally {
            set({ authLoading: false }, false, 'signInEnd');
          }
        },

        // ✅ Sign out
        logout: async () => {
          set({ authLoading: true }, false, 'logout');
          try {
            await signOut();
            set({ session: null }, false, 'logoutSuccess');
          } catch (error) {
            console.error('Logout failed:', error);
          } finally {
            set({ authLoading: false }, false, 'logoutEnd');
          }
        },

        // ✅ Manually set session data
        setSession: session => {
          set({ session }, false, 'setSession');
        },
      }),
      { name: 'auth-storage' } // ✅ Persist auth state in localStorage
    )
  )
);

// 3. Define TypeScript Types
export type AuthState = {
  session: any | null; // Holds session data from NextAuth
  authLoading: boolean; // Tracks authentication loading state
  authProviders: Record<string, ClientSafeProvider> | null;
};

export type AuthActions = {
  resetAuthStore: () => void;
  setProviders: (providers: Record<string, ClientSafeProvider> | null) => void;
  fetchProviders: () => Promise<void>;
  signIn: (provider?: string) => Promise<void>;
  logout: () => Promise<void>;
  setSession: (session: any | null) => void;
};
