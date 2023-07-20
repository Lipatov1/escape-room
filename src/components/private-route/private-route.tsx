import {AppRoute, AuthorizationStatus} from '../../const';
import {Navigate, useLocation} from 'react-router-dom';

type PrivateRouteProps = {
  authorizationStatus: AuthorizationStatus;
  children: JSX.Element;
}

const PrivateRoute = (props: PrivateRouteProps): JSX.Element => {
  const {authorizationStatus, children} = props;
  const location = useLocation();

  return (
    authorizationStatus === AuthorizationStatus.Auth
      ? children
      : <Navigate to={AppRoute.Login} state={location.pathname} />
  );
};

export default PrivateRoute;
