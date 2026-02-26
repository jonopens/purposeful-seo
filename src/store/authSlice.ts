import { createSlice } from '@reduxjs/toolkit';
import type { User } from '../types';

interface AuthState {
  loggedIn: boolean;
  loading: boolean;
  loadedSites: boolean;
  user: User;
}

const initialState: AuthState = {
  loggedIn: false,
  loading: false,
  loadedSites: false,
  user: {},
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setCurrentUser(state, action: { payload: User }) {
      const { username, password_digest, email, id } = action.payload;
      state.loggedIn = true;
      state.loading = true;
      state.user = { username, password_digest, email, id };
      state.loadedSites = false;
    },
    userLoaded(state) {
      state.loadedSites = true;
      state.loading = false;
    },
    logOut(state) {
      localStorage.removeItem('jwt');
      state.loggedIn = false;
      state.loadedSites = false;
      state.user = {};
    },
    loginSuccess(state) {
      state.loggedIn = true;
    },
    signUpSuccess(_, action: { payload: { msg?: string; status?: number } }) {
      // Message is stored in message slice; auth just acknowledges
    },
  },
});

export const { setCurrentUser, userLoaded, logOut, loginSuccess, signUpSuccess } = authSlice.actions;
export default authSlice.reducer;
