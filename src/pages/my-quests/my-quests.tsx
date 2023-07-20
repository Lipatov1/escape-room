import BookingList from '../../components/booking-list/booking-list';
import {fetchBookingQuests} from '../../store/booking/api-actions';
import {useAppDispatch} from '../../hooks';
import {useEffect} from 'react';

const MyQuests = (): JSX.Element => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchBookingQuests());
  }, [dispatch]);

  return (
    <main className="page-content decorated-page">
      <div className="decorated-page__decor" aria-hidden="true">
        <picture>
          <source type="image/webp" srcSet="img/content/maniac/maniac-bg-size-m.webp, img/content/maniac/maniac-bg-size-m@2x.webp 2x" />
          <img src="img/content/maniac/maniac-bg-size-m.jpg" srcSet="img/content/maniac/maniac-bg-size-m@2x.jpg 2x" width="1366" height="1959" alt="" />
        </picture>
      </div>
      <div className="container">
        <div className="page-content__title-wrapper">
          <h1 className="title title--size-m page-content__title">Мои бронирования</h1>
        </div>
        <BookingList />
      </div>
    </main>
  );
};

export default MyQuests;
