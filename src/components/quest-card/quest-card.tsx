import {generatePath, Link} from 'react-router-dom';
import {levelDictionary} from '../../const';
import {Quest} from '../../types/types';
import {AppRoute} from '../../const';

type QuestCardProps = {
  quest: Quest;
}

const QuestCard = ({quest}: QuestCardProps): JSX.Element => {
  const {id, title, level, peopleMinMax, previewImg, previewImgWebp} = quest;

  return (
    <div className="quest-card">
      <div className="quest-card__img">
        <picture>
          <source type="image/webp" srcSet={previewImgWebp}/>
          <img src={previewImg} width="344" height="232" alt={title}/>
        </picture>
      </div>
      <div className="quest-card__content">
        <div className="quest-card__info-wrapper">
          <Link className="quest-card__link" to={generatePath(AppRoute.Quest, {questId: id})}>{title}</Link>
        </div>
        <ul className="tags quest-card__tags">
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
      </div>
    </div>
  );
};

export default QuestCard;
