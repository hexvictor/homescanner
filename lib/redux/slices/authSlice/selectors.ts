/* Instruments */
import type { ReduxState } from "@/lib/redux";

export const selectAuthUser = (state: ReduxState) => state.auth.user;
export const selectAuthLoading = (state: ReduxState) => state.auth.loading;
export const selectAuthToken = (state: ReduxState) => state.auth.token;
export const selectAuthError = (state: ReduxState) => state.auth.error;
export const selectAuthSuccess = (state: ReduxState) => state.auth.success;
