import {Location, useLocation, useNavigate} from 'react-router-dom';
import {getAuthorizationStatus} from '../../store/user/selectors';
import LoginForm from '../../components/login-form/login-form';
import {AuthorizationStatus} from '../../const';
import {useAppSelector} from '../../hooks';
import {useEffect} from 'react';

const Login = (): JSX.Element => {
  const authorizationStatus = useAppSelector(getAuthorizationStatus);
  const location: Location = useLocation();
  const previousPath = location.state as string;
  const navigate = useNavigate();

  useEffect(() => {
    if (authorizationStatus === AuthorizationStatus.Auth) {
      if (!previousPath) {
        navigate(-1);
      } else {
        navigate(previousPath);
      }
    }
  }, [authorizationStatus, navigate, location, previousPath]);

  return (
    <main className="decorated-page login">
      <div className="decorated-page__decor" aria-hidden="true">
        <picture>
          <source type="image/webp" srcSet="img/content/maniac/maniac-size-m.webp, img/content/maniac/maniac-size-m@2x.webp 2x" />
          <img src="img/content/maniac/maniac-size-m.jpg" srcSet="img/content/maniac/maniac-size-m@2x.jpg 2x" width="1366" height="768" alt="" />
        </picture>
      </div>
      <div className="container container--size-l">
        <div className="login__form">
          <LoginForm />
        </div>
      </div>
    </main>
  );
};

export default Login;
