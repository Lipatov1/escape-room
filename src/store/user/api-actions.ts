import {saveToken, dropToken} from '../../services/token';
import {AuthData, UserData} from '../../types/types';
import {createAsyncThunk} from '@reduxjs/toolkit';
import {ThunkOptions} from '../../types/state.js';
import {showToast} from '../../utils/common';
import {APIRoute} from '../../const';

export const checkAuth = createAsyncThunk<void, undefined, ThunkOptions>(
  'user/checkAuth',
  async (_arg, {dispatch, extra: api}) => {
    await api.get(APIRoute.Login);
  },
);

export const login = createAsyncThunk<void, AuthData, ThunkOptions>(
  'user/login',
  async ({email, password}, {dispatch, extra: api}) => {
    try {
      const {data: {token}} = await api.post<UserData>(APIRoute.Login, {email, password});
      saveToken(token);
      showToast('Вход выполнен успешно!', 'success');
    } catch (error) {
      showToast('Ошибка авторизации', 'error');
      throw error;
    }
  },
);

export const logout = createAsyncThunk<void, undefined, ThunkOptions>(
  'user/logout',
  async (_arg, {dispatch, extra: api}) => {
    try {
      await api.delete(APIRoute.Logout);
      dropToken();
    } catch (error) {
      showToast('Ошибка выхода', 'error');
      throw error;
    }
  },
);
