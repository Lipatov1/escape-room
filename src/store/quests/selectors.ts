import {getLevel, getType} from '../app/selectors';
import {createSelector} from '@reduxjs/toolkit';
import {Quest} from '../../types/types';
import {State} from '../../types/state';
import {Level, NameSpace, Type} from '../../const';

export const getQuests = ({[NameSpace.Quests]: QUESTS}: State): Quest[] => QUESTS.quests;
export const getLoadedQuestsStatus = ({[NameSpace.Quests]: QUESTS}: State): boolean => QUESTS.isQuestsLoading;

export const selectQuests = createSelector(
  [getQuests, getLevel, getType],
  (quests, level, type) => quests.filter((quest) => (level === Level.Any || quest.level === level) && (type === Type.All || quest.type === type))
);
