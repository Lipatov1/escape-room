import {AuthorizationStatus} from '../../const';
import {State} from '../../types/state';
import {NameSpace} from '../../const';

export const getAuthorizationStatus = ({[NameSpace.User]: USER}: State): AuthorizationStatus => USER.authorizationStatus;
