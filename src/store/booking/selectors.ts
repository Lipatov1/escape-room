import {BookingInfo, BookingQuestResponse} from '../../types/types';
import {State} from '../../types/state';
import {NameSpace} from '../../const';

export const getBookingInfo = ({ [NameSpace.Booking]: BOOKING}: State): BookingInfo[] => BOOKING.bookingInfo;
export const getBookingQuests = ({ [NameSpace.Booking]: BOOKING}: State): BookingQuestResponse[] => BOOKING.bookingQuests;
export const getCurrentLocation = ({ [NameSpace.Booking]: BOOKING}: State): BookingInfo | null => BOOKING.currentLocation;
export const getLoadedBookingInfoStatus = ({ [NameSpace.Booking]: BOOKING}: State): boolean => BOOKING.isBookingInfoLoading;
export const getLoadedBookingQuestsStatus = ({ [NameSpace.Booking]: BOOKING}: State): boolean => BOOKING.isBookingQuestsLoading;
