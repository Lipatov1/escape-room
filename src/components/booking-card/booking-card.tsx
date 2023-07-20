import {AppRoute, dateDictionary, levelDictionary} from '../../const';
import {deleteBookingQuest} from '../../store/booking/api-actions';
import {BookingQuestResponse} from '../../types/types';
import {generatePath, Link} from 'react-router-dom';
import {useAppDispatch} from '../../hooks';

type BookingCardProps = {
  reservationQuest: BookingQuestResponse;
}

const BookingCard = ({reservationQuest}: BookingCardProps): JSX.Element => {
  const {id, time, date, quest, location, peopleCount} = reservationQuest;
  const {id: questId, title, level, previewImg, previewImgWebp} = quest;
  const {address} = location;
  const dispatch = useAppDispatch();

  const handleButtonClick = () => {
    dispatch(deleteBookingQuest(id));
  };

  return (
    <div className="quest-card">
      <div className="quest-card__img">
        <picture>
          <source type="image/webp" srcSet={previewImgWebp} />
          <img src={previewImg} width="344" height="232" alt={title} />
        </picture>
      </div>
      <div className="quest-card__content">
        <div className="quest-card__info-wrapper">
          <Link className="quest-card__link" to={generatePath(AppRoute.Quest, {questId: questId})}>{title}</Link>
          <span className="quest-card__info">{`[${dateDictionary[date]}, ${time}. ${address}]`}</span>
        </div>
        <ul className="tags quest-card__tags">
          <li className="tags__item">
            <svg width="11" height="14" aria-hidden="true">
              <use xlinkHref="#icon-person"></use>
            </svg>
            {peopleCount} чел
          </li>
          <li className="tags__item">
            <svg width="14" height="14" aria-hidden="true">
              <use xlinkHref="#icon-level"></use>
            </svg>
            {levelDictionary[level]}
          </li>
        </ul>
        <button className="btn btn--accent btn--secondary quest-card__btn" type="button" onClick={handleButtonClick}>Отменить</button>
      </div>
    </div>
  );
};

export default BookingCard;
