import {Level, NameSpace, Type} from '../../const';
import {State} from '../../types/state';

export const getLevel = ({ [NameSpace.App]: App }: State): Level => App.level;
export const getType = ({ [NameSpace.App]: App }: State): Type => App.type;
