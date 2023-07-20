import {fetchBookingQuests, fetchBookingInfo, deleteBookingQuest} from './api-actions';
import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {BookingData} from '../../types/state';
import {BookingInfo} from '../../types/types';
import {NameSpace} from '../../const';

const initialState: BookingData = {
  bookingInfo: [],
  bookingQuests: [],
  currentLocation: null,
  isBookingInfoLoading: false,
  isBookingQuestsLoading: false,
};

export const bookingSlice = createSlice({
  name: NameSpace.Booking,
  initialState,
  reducers: {
    changeCurrentLocation: (state, action: PayloadAction<BookingInfo>) => {
      state.currentLocation = action.payload;
    }
  },
  extraReducers(builder) {
    builder
      .addCase(fetchBookingInfo.pending, (state) => {
        state.isBookingInfoLoading = true;
      })
      .addCase(fetchBookingInfo.fulfilled, (state, action) => {
        state.bookingInfo = action.payload;
        state.isBookingInfoLoading = false;
      })
      .addCase(fetchBookingInfo.rejected, (state) => {
        state.isBookingInfoLoading = false;
      })
      .addCase(fetchBookingQuests.pending, (state) => {
        state.isBookingQuestsLoading = true;
      })
      .addCase(fetchBookingQuests.fulfilled, (state, action) => {
        state.bookingQuests = action.payload;
        state.isBookingQuestsLoading = false;
      })
      .addCase(fetchBookingQuests.rejected, (state) => {
        state.isBookingQuestsLoading = false;
      })
      .addCase(deleteBookingQuest.fulfilled, (state, action) => {
        state.bookingQuests = state.bookingQuests.filter((bookingQuest) => bookingQuest.id !== action.payload);
      });
  }
});

export const {changeCurrentLocation} = bookingSlice.actions;
