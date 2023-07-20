import {BookingInfo, Quest, BookingQuestResponse} from './types';
import {AuthorizationStatus, Level, Type} from '../const';
import {AxiosInstance} from 'axios';
import {store} from '../store';

export type UserProcess = {
  authorizationStatus: AuthorizationStatus;
};

export type QuestsData = {
  quests: Quest[];
  isQuestsLoading: boolean;
};

export type QuestData = {
  quest: Quest | null;
  isQuestLoading: boolean;
};

export type BookingData = {
  bookingInfo: BookingInfo[];
  isBookingInfoLoading: boolean;
  bookingQuests: BookingQuestResponse[];
  isBookingQuestsLoading: boolean;
  currentLocation: BookingInfo | null;
};

export type AppProcess = {
  level: Level;
  type: Type;
}

export type State = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export type ThunkOptions = {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
};
