/* Core */
import {createSlice} from '@reduxjs/toolkit';

const initialState: AuthSliceState = {
  loading: false,
  user: null,
  token: null,
  error: null,
  success: false,
};
export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    // Successfully log in user
    signIn: state => {
      state.loading = false;
      state.user = {id: '1', email: 'email@email.com', name: 'name'};
      state.token = 'token';
      state.error = null;
      state.success = true;
    },
    // Log off user from the app
    signOut: state => {
      state.loading = false;
      state.user = null;
      state.token = null;
      state.error = null;
      state.success = false;
    },
    signInError: (state, action) => {
      state.loading = false;
      state.user = null;
      state.token = null;
      state.error = action.payload;
      state.success = false;
    },
  },
});

/* Types */
export interface AuthSliceState {
  loading: boolean;
  user: User;
  token: TokenType;
  error: AuthError;
  success: boolean;
}

type AuthError = ErrorType | null;
type TokenType = string | null;
type User = UserType | null;

interface ErrorType {
  message: string;
  code: number;
}
interface UserType {
  id: string;
  email: string;
  name: string;
}
