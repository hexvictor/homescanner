/* Instruments */
import type { ReduxState } from "@/lib/redux";

export const selectProfileMenuState = (state: ReduxState) => state.navbar.profileMenu;
export const selectMobileMenuState = (state: ReduxState) => state.navbar.mobileMenu;
