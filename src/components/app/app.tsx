import {getAuthorizationStatus} from '../../store/user/selectors';
import HistoryRouter from '../history-route/history-route';
import {useAppDispatch, useAppSelector} from '../../hooks';
import {AppRoute, AuthorizationStatus} from '../../const';
import PrivateRoute from '../private-route/private-route';
import {checkAuth} from '../../store/user/api-actions';
import NotFound from '../../pages/not-found/not-found';
import MyQuests from '../../pages/my-quests/my-quests';
import Contacts from '../../pages/contacts/contacts';
import browserHistory from '../../browser-history';
import Booking from '../../pages/booking/booking';
import {Route, Routes} from 'react-router-dom';
import Quest from '../../pages/quest/quest';
import Login from '../../pages/login/login';
import Spinner from '../spinner/spinner';
import Main from '../../pages/main/main';
import Layout from '../layout/layout';
import {useEffect} from 'react';

const App = (): JSX.Element => {
  const dispatch = useAppDispatch();
  const authorizationStatus = useAppSelector(getAuthorizationStatus);

  useEffect(() => {
    dispatch(checkAuth());
  }, [dispatch]);

  if (authorizationStatus === AuthorizationStatus.Unknown) {
    return <Spinner />;
  }

  return (
    <HistoryRouter history={browserHistory}>
      <Routes>
        <Route path={AppRoute.Root} element={<Layout />}>
          <Route index element={<Main />} />
          <Route path={AppRoute.Login} element={<Login />} />
          <Route path={AppRoute.Contacts} element={<Contacts />} />
          <Route path={AppRoute.Quest} element={<Quest />} />
          <Route path={AppRoute.MyQuests}
            element={
              <PrivateRoute authorizationStatus={authorizationStatus}>
                <MyQuests />
              </PrivateRoute>
            }
          />
          <Route path={AppRoute.Booking}
            element={
              <PrivateRoute authorizationStatus={authorizationStatus}>
                <Booking />
              </PrivateRoute>
            }
          />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </HistoryRouter>
  );
};

export default App;
