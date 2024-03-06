/* Core */
import { createSlice } from "@reduxjs/toolkit";

const initialState: NavbarSliceState = {
  profileMenu: false,
  mobileMenu: false,
};
export const navbarSlice = createSlice({
  name: "navbar",
  initialState,
  reducers: {
    // Toggle Profile menu on or off
    toggleProfileMenu: (state) => {
      state.profileMenu = !state.profileMenu;
    },
    openProfileMenu: (state) => {
      state.profileMenu = true;
    },
    closeProfileMenu: (state) => {
      state.profileMenu = false;
    },
    // Toggle Mobile menu on or off
    toggleMobileMenu: (state) => {
      state.mobileMenu = !state.mobileMenu;
    },
  },
});

/* Types */
export interface NavbarSliceState {
  profileMenu: boolean;
  mobileMenu: boolean;
}
