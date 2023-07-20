import LevelFilterItem from '../level-filter-item/level-filter-item';
import {useAppDispatch, useAppSelector} from '../../hooks';
import {getLevel} from '../../store/app/selectors';
import {setLevel} from '../../store/app/app-slice';
import {useCallback} from 'react';
import {Level} from '../../const';


const LevelFilterList = (): JSX.Element => {
  const dispatch = useAppDispatch();
  const activeLevel = useAppSelector(getLevel);

  const handleLevelChange = useCallback((level: Level) => {
    dispatch(setLevel(level));
  }, [dispatch]);

  return (
    <fieldset className="filter__section">
      <legend className="visually-hidden">Сложность</legend>
      <ul className="filter__list">
        {Object.values(Level).map((level) => (
          <LevelFilterItem key={level} level={level} isActive={level === activeLevel} onChange={handleLevelChange} />
        ))}
      </ul>
    </fieldset>
  );
};

export default LevelFilterList;
