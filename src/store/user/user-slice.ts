import {NameSpace, AuthorizationStatus} from '../../const';
import {checkAuth, login, logout} from './api-actions';
import {UserProcess} from '../../types/state';
import {createSlice} from '@reduxjs/toolkit';

const initialState: UserProcess = {
  authorizationStatus: AuthorizationStatus.Unknown,
};

export const userSlice = createSlice({
  name: NameSpace.User,
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(checkAuth.fulfilled, (state) => {
        state.authorizationStatus = AuthorizationStatus.Auth;
      })
      .addCase(checkAuth.rejected, (state) => {
        state.authorizationStatus = AuthorizationStatus.NoAuth;
      })
      .addCase(login.fulfilled, (state) => {
        state.authorizationStatus = AuthorizationStatus.Auth;
      })
      .addCase(login.rejected, (state) => {
        state.authorizationStatus = AuthorizationStatus.NoAuth;
      })
      .addCase(logout.fulfilled, (state, action) => {
        state.authorizationStatus = AuthorizationStatus.NoAuth;
      });
  }
});
