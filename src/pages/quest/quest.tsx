import {getQuest, getLoadedQuestStatus} from '../../store/quest/selectors';
import {AppRoute, levelDictionary, typeDictionary} from '../../const';
import {generatePath, Link, useParams} from 'react-router-dom';
import {useAppDispatch, useAppSelector} from '../../hooks';
import {fetchQuest} from '../../store/quest/api-actions';
import Spinner from '../../components/spinner/spinner';
import NotFound from '../not-found/not-found';
import {useEffect} from 'react';

const Quest = (): JSX.Element => {
  const params = useParams();
  const dispatch = useAppDispatch();
  const questId = String(useParams().questId);
  const quest = useAppSelector(getQuest);
  const isQuestLoading = useAppSelector(getLoadedQuestStatus);

  useEffect(() => {
    if (questId) {
      dispatch(fetchQuest(questId));
    }
  }, [params, dispatch, questId]);

  if (isQuestLoading) {
    return <Spinner />;
  }

  if (!quest) {
    return <NotFound />;
  }

  const { title, description, type, level, coverImg, coverImgWebp, peopleMinMax} = quest;

  return (
    <main className="decorated-page quest-page">
      <div className="decorated-page__decor" aria-hidden="true">
        <picture>
          <source type="image/webp" srcSet={coverImgWebp} />
          <img src={coverImg} srcSet={coverImgWebp} width="1366" height="768" alt={title} />
        </picture>
      </div>
      <div className="container container--size-l">
        <div className="quest-page__content">
          <h1 className="title title--size-l title--uppercase quest-page__title">{title}</h1>
          <p className="subtitle quest-page__subtitle">
            <span className="visually-hidden">Жанр:</span>{typeDictionary[type]}
          </p>
          <ul className="tags tags--size-l quest-page__tags">
            <li className="tags__item">
              <svg width="11" height="14" aria-hidden="true">
                <use xlinkHref="#icon-person"></use>
              </svg>
              {peopleMinMax[0]}–{peopleMinMax[1]} чел
            </li>
            <li className="tags__item">
              <svg width="14" height="14" aria-hidden="true">
                <use xlinkHref="#icon-level"></use>
              </svg>
              {levelDictionary[level]}
            </li>
          </ul>
          <p className="quest-page__description">{description}</p>
          <Link className="btn btn--accent btn--cta quest-page__btn" to={generatePath(AppRoute.Booking, {questId: questId})}>Забронировать</Link>
        </div>
      </div>
    </main>
  );
};

export default Quest;
