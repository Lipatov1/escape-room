import {BookingFormInputs, FormInput, LocationMap, LoginFormInputs, TypeFilter} from './types/types';
import {Icon} from 'leaflet';

export enum AppRoute {
  Root = '/',
  Login = '/login',
  Booking = '/quest/:questId/booking',
  Contacts = '/contacts',
  Quest = '/quest/:questId',
  MyQuests = '/my-quests',
}

export enum APIRoute {
  Quests = '/quest',
  MyQuests = '/reservation',
  Booking = '/booking',
  Login = '/login',
  Logout = '/logout',
}

export enum AuthorizationStatus {
  Auth = 'AUTH',
  NoAuth = 'NO_AUTH',
  Unknown = 'UNKNOWN',
}

export enum Type {
  All = 'all',
  Adventures = 'adventures',
  Horror = 'horror',
  Mystic = 'mystic',
  Detective = 'detective',
  SciFi = 'sci-fi'
}

export const typeDictionary = {
  [Type.All]: 'все квесты',
  [Type.Adventures]: 'приключения',
  [Type.Horror]: 'ужасы',
  [Type.Mystic]: 'мистика',
  [Type.Detective]: 'детектив',
  [Type.SciFi]: 'sci-fi'
};

export const DEFAULT_TYPE = Type.All;

export enum Level {
  Any = 'any',
  Easy = 'easy',
  Medium = 'medium',
  Hard = 'hard'
}

export const levelDictionary = {
  [Level.Any]: 'любой',
  [Level.Easy]: 'лёгкий',
  [Level.Medium]: 'средний',
  [Level.Hard]: 'сложный'
};

export enum Date {
  Today = 'today',
  Tomorrow = 'tomorrow'
}

export const dateDictionary = {
  [Date.Today]: 'сегодня',
  [Date.Tomorrow]: 'завтра'
};

export const DEFAULT_LEVEL = Level.Any;

export enum NameSpace {
  App = 'APP',
  User = 'USER',
  Quests = 'QUESTS',
  Quest = 'QUEST',
  Booking = 'BOOKING',
}

export const defaultCustomIcon = new Icon({
  iconUrl: 'img/svg/pin-default.svg',
  iconSize: [40, 40],
  iconAnchor: [20, 40]
});

export const currentCustomIcon = new Icon({
  iconUrl: 'img/svg/pin-active.svg',
  iconSize: [40, 40],
  iconAnchor: [20, 40]
});

export const OFFICE: LocationMap = {
  lat: 59.968353,
  lng: 30.317446,
  zoom: 16
};

export const CITY: LocationMap = {
  lat: 59.948248,
  lng: 30.386469,
  zoom: 11
};

export const LOGIN_INPUTS: FormInput<keyof LoginFormInputs>[] = [
  {
    name: 'email',
    type: 'email',
    label: 'E – mail',
    placeholder: 'Адрес электронной почты',
    pattern: /^[A-Z0-9._%+-]+@[A-Z0-9-]+.+.[A-Z]{2,4}$/i,
    errorText: 'Введите корректный E–mail'
  },
  {
    name: 'password',
    type: 'password',
    label: 'Пароль',
    placeholder: 'Пароль',
    pattern: /^(?=.*[a-zA-Z])(?=.*\d).{3,15}$/g,
    errorText: 'Пароль должен быть от 3 до 15 символов и хотя бы одну цифру и букву'
  }
];

export const BOOKING_INPUTS: FormInput<keyof BookingFormInputs>[] = [
  {
    name: 'contactPerson',
    type: 'text',
    label: 'Ваше имя',
    placeholder: 'Имя',
    pattern: /^.{1,15}$/,
    errorText: 'Имя должно быть 1 до 15 символов'
  },
  {
    name: 'phone',
    type: 'tel',
    label: 'Контактный телефон',
    placeholder: 'Телефон',
    pattern: /^(\+[7]|[8])?((\d{2,3}) ?\d|\d)(([ -]?\d)|( ?(\d{2,3}) ?)){8,12}\d$/,
    errorText: 'Введите корректный номер телефона'
  },
  {
    name: 'peopleCount',
    type: 'number',
    label: 'Количество участников',
    placeholder: 'Количество участников',
    pattern: /^[1-9]$/,
    errorText: 'Введите количество участников'
  }
];

export const TYPE_FILTERS: TypeFilter[] = [
  {
    text: 'Все квесты',
    type: Type.All,
    icon: {
      name: 'icon-all-quests',
      width: '26',
      height: '30',
    },
  },
  {
    text: 'Приключения',
    type: Type.Adventures,
    icon: {
      name: 'icon-adventure',
      width: '36',
      height: '30',
    },
  },
  {
    text: 'Ужасы',
    type: Type.Horror,
    icon: {
      name: 'icon-horror',
      width: '30',
      height: '30',
    },
  },
  {
    text: 'Мистика',
    type: Type.Mystic,
    icon: {
      name: 'icon-mystic',
      width: '30',
      height: '30',
    },
  },
  {
    text: 'Детектив',
    type: Type.Detective,
    icon: {
      name: 'icon-detective',
      width: '40',
      height: '30',
    },
  },
  {
    text: 'Sci-fi',
    type: Type.SciFi,
    icon: {
      name: 'icon-sci-fi',
      width: '28',
      height: '30',
    },
  },
];
