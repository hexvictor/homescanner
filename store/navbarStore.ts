import { create } from 'zustand';
import { devtools } from 'zustand/middleware';

// 1. Define the Initial State
const initState: NavbarState = {
  mobileMenuOpen: false,
  profileMenuOpen: false,
};

// 2. Create the Zustand Store
export const useNavbarStore = create<NavbarState & NavbarActions>()(
  devtools(set => ({
    ...initState,

    resetNavbarStore: () => {
      set({ ...initState }, false, 'resetNavbarStore');
    },

    toggleMobileMenu: () => {
      set(state => ({ mobileMenuOpen: !state.mobileMenuOpen }), false, 'toggleMobileMenu');
    },

    toggleProfileMenu: () => {
      set(state => ({ profileMenuOpen: !state.profileMenuOpen }), false, 'toggleProfileMenu');
    },

    openMobileMenu: () => {
      set({ mobileMenuOpen: true }, false, 'openMobileMenu');
    },

    closeMobileMenu: () => {
      set({ mobileMenuOpen: false }, false, 'closeMobileMenu');
    },

    openProfileMenu: () => {
      set({ profileMenuOpen: true }, false, 'openProfileMenu');
    },

    closeProfileMenu: () => {
      set({ profileMenuOpen: false }, false, 'closeProfileMenu');
    },
  }))
);

// 3. Define TypeScript Types
export type NavbarState = {
  mobileMenuOpen: boolean;
  profileMenuOpen: boolean;
};

export type NavbarActions = {
  resetNavbarStore: () => void;
  toggleMobileMenu: () => void;
  toggleProfileMenu: () => void;
  openMobileMenu: () => void;
  closeMobileMenu: () => void;
  openProfileMenu: () => void;
  closeProfileMenu: () => void;
};
