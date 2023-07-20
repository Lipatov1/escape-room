import {getBookingQuests, getLoadedBookingQuestsStatus} from '../../store/booking/selectors';
import BookingCard from '../booking-card/booking-card';
import ListEmpty from '../list-empty/list-empty';
import {useAppSelector} from '../../hooks';
import Spinner from '../spinner/spinner';

const BookingList = (): JSX.Element => {
  const isBookingQuestsLoading = useAppSelector(getLoadedBookingQuestsStatus);
  const bookingQuests = useAppSelector(getBookingQuests);

  if (isBookingQuestsLoading) {
    return <Spinner />;
  }

  if (!bookingQuests.length) {
    return <ListEmpty />;
  }

  return (
    <div className="cards-grid">
      {bookingQuests.map((quest) => <BookingCard key={quest.id} reservationQuest={quest} />)}
    </div>
  );
};

export default BookingList;
