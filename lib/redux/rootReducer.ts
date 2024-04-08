/* Instruments */
import { counterSlice, navbarSlice, authSlice } from "./slices";

export const reducer = {
  counter: counterSlice.reducer,
  navbar: navbarSlice.reducer,
  auth: authSlice.reducer,
};
