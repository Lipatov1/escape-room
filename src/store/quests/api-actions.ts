import {createAsyncThunk} from '@reduxjs/toolkit';
import {ThunkOptions} from '../../types/state';
import {showToast} from '../../utils/common';
import {Quest} from '../../types/types';
import {APIRoute} from '../../const';

export const fetchQuests = createAsyncThunk<Quest[], undefined, ThunkOptions>(
  'data/fetchQuests',
  async (_arg, {dispatch, extra: api}) => {
    try {
      const {data} = await api.get<Quest[]>(APIRoute.Quests);

      return data;
    } catch (error) {
      showToast('Ошибка загрузки данных квестов', 'error');
      throw error;
    }
  },
);
