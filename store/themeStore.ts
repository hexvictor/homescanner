import { create } from 'zustand';
import { persist, devtools } from 'zustand/middleware';

// 1. Define Initial State
const initState: ThemeState = {
  darkMode: false,
};

// 2. Create Zustand Store
export const useThemeStore = create<ThemeState & ThemeActions>()(
  devtools(
    persist(
      set => ({
        ...initState,

        // ✅ Reset the store to initial state
        resetThemeStore: () => {
          set({ ...initState }, false, 'resetThemeStore');
        },

        // ✅ Toggle Dark Mode
        toggleDarkMode: () => {
          set(state => ({ darkMode: !state.darkMode }), false, 'toggleDarkMode');
        },
      }),
      { name: 'theme-storage' } // ✅ Persist theme state in localStorage
    )
  )
);

// 3. Define TypeScript Types
export type ThemeState = {
  darkMode: boolean;
};

export type ThemeActions = {
  resetThemeStore: () => void;
  toggleDarkMode: () => void;
};
