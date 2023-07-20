import {bookingSlice} from './booking/booking-slice';
import {questsSlice} from './quests/quests-slice';
import {combineReducers} from '@reduxjs/toolkit';
import {questSlice} from './quest/quest-slice';
import {userSlice} from './user/user-slice';
import {appSlice} from './app/app-slice';
import {NameSpace} from '../const';

export const rootReducer = combineReducers({
  [NameSpace.User]: userSlice.reducer,
  [NameSpace.App]: appSlice.reducer,
  [NameSpace.Quests]: questsSlice.reducer,
  [NameSpace.Quest]: questSlice.reducer,
  [NameSpace.Booking]: bookingSlice.reducer,
});
