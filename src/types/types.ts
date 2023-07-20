import {Level, Type, Date} from '../const';

export type AuthData = {
  email: string;
  password: string;
};

export type UserData = {
  id: number;
  email: string;
  token: string;
};

export type Quest = {
  id: string;
  title: string;
  previewImg: string;
  previewImgWebp: string;
  level: Level;
  type: Type;
  peopleMinMax: [number, number];
  description: string;
  coverImg: string;
  coverImgWebp: string;
};

export type Location = {
  address: string;
  coords: [number, number];
};

export type TimeAvailability = {
  time: string;
  isAvailable: boolean;
}

export type Slots = {
  today: TimeAvailability[];
  tomorrow: TimeAvailability[];
}

export type BookingInfo = {
  id: string;
  location: Location;
  slots: Slots;
};

export type BookingQuestRequest = {
  date: Date;
  time: string;
  contactPerson: string;
  phone: string;
  withChildren: boolean;
  peopleCount: number;
  placeId: string;
};

export type BookingQuestResponse = Omit<BookingQuestRequest, 'placeId'> & {
  id: string;
  location: Location;
  quest: Omit<Quest, 'description' | 'coverImg' | 'coverImgWebp'>;
}

export type LocationMap = {
  lat: number;
  lng: number;
  zoom: number;
};

export type TypeFilter = {
  text: string;
  type: Type;
  icon: {
    name: string;
    width: string;
    height: string;
  };
};

export type LoginFormInputs = {
  email: string;
  password: string;
};

export type BookingFormInputs = {
  contactPerson: string;
  phone: string;
  peopleCount: number;
};

export type BookingFormFields = BookingFormInputs & {
  date: Date;
  time: string;
  withChildren: boolean;
  placeId: string;
};

export type FormInput<T> = {
  name: T;
  type: string;
  label: string;
  placeholder: string;
  pattern: RegExp;
  errorText: string;
};
