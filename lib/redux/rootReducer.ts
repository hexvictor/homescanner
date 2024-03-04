/* Instruments */
import { counterSlice } from "./slices";
import { navbarSlice } from "./slices";
import { authSlice } from "./slices";

export const reducer = {
  counter: counterSlice.reducer,
  navbar: navbarSlice.reducer,
  auth: authSlice.reducer,
};
