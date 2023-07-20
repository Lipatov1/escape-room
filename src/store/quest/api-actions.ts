import {createAsyncThunk} from '@reduxjs/toolkit';
import {ThunkOptions} from '../../types/state';
import {showToast} from '../../utils/common';
import {Quest} from '../../types/types';
import {APIRoute} from '../../const';

export const fetchQuest = createAsyncThunk<Quest, string, ThunkOptions>(
  'data/fetchQuest',
  async (id, {dispatch, extra: api}) => {
    try {
      const {data} = await api.get<Quest>(`${APIRoute.Quests}/${id}`);

      return data;
    } catch (error) {
      showToast('Ошибка загрузки данных квеста', 'error');
      throw error;
    }
  },
);
