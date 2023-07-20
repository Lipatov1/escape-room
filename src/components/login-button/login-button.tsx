import {getAuthorizationStatus} from '../../store/user/selectors';
import {useAppDispatch, useAppSelector} from '../../hooks';
import {AppRoute, AuthorizationStatus} from '../../const';
import {logout} from '../../store/user/api-actions';
import {Link} from 'react-router-dom';

const LoginButton = (): JSX.Element => {
  const authorizationStatus = useAppSelector(getAuthorizationStatus);
  const dispatch = useAppDispatch();

  const handleButtonClick = () => {
    dispatch(logout());
  };

  return (
    authorizationStatus === AuthorizationStatus.Auth ?
      <Link
        className="btn btn--accent header__side-item"
        onClick={handleButtonClick}
        to={AppRoute.Root}
      >
        Выйти
      </Link>
      :
      <Link className="btn header__side-item header__login-btn" to={AppRoute.Login}>Вход</Link>
  );
};

export default LoginButton;
