import {Quest} from '../../types/types';
import {State} from '../../types/state';
import {NameSpace} from '../../const';

export const getQuest = ({ [NameSpace.Quest]: QUEST}: State): Quest | null => QUEST.quest;
export const getLoadedQuestStatus = ({ [NameSpace.Quest]: QUEST}: State): boolean => QUEST.isQuestLoading;
