import {getBookingInfo, getCurrentLocation, getLoadedBookingInfoStatus} from '../../store/booking/selectors';
import {changeCurrentLocation} from '../../store/booking/booking-slice';
import BookingForm from '../../components/booking-form/booking-form';
import {fetchBookingInfo} from '../../store/booking/api-actions';
import {useAppDispatch, useAppSelector} from '../../hooks';
import {fetchQuest} from '../../store/quest/api-actions';
import Spinner from '../../components/spinner/spinner';
import {getQuest} from '../../store/quest/selectors';
import {BookingInfo} from '../../types/types';
import NotFound from '../not-found/not-found';
import {useCallback, useEffect} from 'react';
import Map from '../../components/map/map';
import {useParams} from 'react-router-dom';
import {CITY} from '../../const';

const Booking = (): JSX.Element => {
  const params = useParams();
  const dispatch = useAppDispatch();
  let currentCurrentLocation = useAppSelector(getCurrentLocation);
  const bookingInfo = useAppSelector(getBookingInfo);
  const isDataLoading = useAppSelector(getLoadedBookingInfoStatus);
  const quest = useAppSelector(getQuest);
  const questId = String(useParams().questId);

  if (!currentCurrentLocation) {
    currentCurrentLocation = bookingInfo[0];
  }

  const handleMarkerClick = useCallback((newBookingInfo: BookingInfo): void => {
    dispatch(changeCurrentLocation(newBookingInfo));
  }, [dispatch]);

  useEffect(() => {
    dispatch(fetchQuest(questId));
    dispatch(fetchBookingInfo(questId));
  }, [params, dispatch, questId]);

  if (isDataLoading) {
    return <Spinner />;
  }

  if (!bookingInfo || !currentCurrentLocation || !quest) {
    return <NotFound />;
  }

  return (
    <main className="page-content decorated-page">
      <div className="decorated-page__decor" aria-hidden="true">
        <picture>
          <source type="image/webp" srcSet="img/content/maniac/maniac-bg-size-m.webp, img/content/maniac/maniac-bg-size-m@2x.webp 2x"/>
          <img src="img/content/maniac/maniac-bg-size-m.jpg" srcSet="img/content/maniac/maniac-bg-size-m@2x.jpg 2x" width="1366" height="1959" alt=""/>
        </picture>
      </div>
      <div className="container container--size-s">
        <div className="page-content__title-wrapper">
          <h1 className="subtitle subtitle--size-l page-content__subtitle">Бронирование квеста</h1>
          <p className="title title--size-m title--uppercase page-content__title">{quest.title}</p>
        </div>
        <div className="page-content__item">
          <div className="booking-map">
            <div className="map">
              <Map points={bookingInfo} locationMap={CITY} activePoint={currentCurrentLocation} onMarkerClick={handleMarkerClick}/>
            </div>
            <p className="booking-map__address">Вы выбрали: {currentCurrentLocation.location.address}</p>
          </div>
        </div>
        <BookingForm bookingInfo={currentCurrentLocation} questId={questId} />
      </div>
    </main>
  );
};

export default Booking;
