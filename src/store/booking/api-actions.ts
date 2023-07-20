import {BookingInfo, BookingQuestRequest, BookingQuestResponse} from '../../types/types';
import {createAsyncThunk} from '@reduxjs/toolkit';
import {APIRoute, AppRoute} from '../../const';
import {ThunkOptions} from '../../types/state';
import {showToast} from '../../utils/common';
import {redirectToRoute} from '../action';

export const fetchBookingInfo = createAsyncThunk<BookingInfo[], string, ThunkOptions>(
  'data/fetchQuestBookingInfo',
  async (questId, {dispatch, extra: api}) => {
    const {data} = await api.get<BookingInfo[]>(`${APIRoute.Quests}/${questId}${APIRoute.Booking}`);

    return data;
  },
);

export const bookQuest = createAsyncThunk<BookingQuestResponse, [BookingQuestRequest, string], ThunkOptions>(
  'data/bookQuest',
  async ([bookingQuest, questId], {dispatch, extra: api}) => {
    try {
      const { data } = await api.post<BookingQuestResponse>(`${APIRoute.Quests}/${questId}${APIRoute.Booking}`, bookingQuest);
      dispatch(redirectToRoute(AppRoute.MyQuests));
      showToast('Квест успешно забронирован!', 'success');

      return data;
    } catch (error) {
      showToast('Ошибка бронирования квеста', 'error');
      throw error;
    }
  },
);

export const fetchBookingQuests = createAsyncThunk<BookingQuestResponse[], undefined, ThunkOptions>(
  'data/fetchBookingQuests',
  async (_arg, { dispatch, extra: api }) => {
    try {
      const { data } = await api.get<BookingQuestResponse[]>(APIRoute.MyQuests);

      return data;
    } catch (error) {
      showToast('Ошибка получения информации о бронированиях', 'error');
      throw error;
    }
  }
);

export const deleteBookingQuest = createAsyncThunk<string, string, ThunkOptions>(
  'data/deleteBookingQuest',
  async (placeId, { dispatch, extra: api }) => {
    try {
      await api.delete(`${APIRoute.MyQuests}/${placeId}`);
      showToast('Бронирование квеста отменено', 'success');

      return placeId;
    } catch (error) {
      showToast('Ошибка отмены бронирования', 'error');
      throw error;
    }
  }
);
