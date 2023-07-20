import {capitalizeFirstLetter} from '../../utils/common';
import {Level, levelDictionary} from '../../const';

type LevelFilterItemProps = {
  level: Level;
  isActive: boolean;
  onChange: (level: Level) => void;
}

const LevelFilterItem = ({level, isActive, onChange}: LevelFilterItemProps): JSX.Element => {
  const handleLevelChange = () => {
    onChange(level);
  };

  return (
    <li className="filter__item">
      <input type="radio" name="level" id={level} checked={isActive} onChange={handleLevelChange} />
      <label className="filter__label" htmlFor={level}>
        <span className="filter__label-text">{capitalizeFirstLetter(levelDictionary[level])}</span>
      </label>
    </li>
  );
};

export default LevelFilterItem;
