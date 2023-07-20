import {TypeFilter} from '../../types/types';
import {Type} from '../../const';
import React from 'react';

type TypeFilterItemProps = {
  typeFilter: TypeFilter;
  isActive: boolean;
  onChange: (type: Type) => void;
}

const TypeFilterItem = ({typeFilter, isActive, onChange}: TypeFilterItemProps): JSX.Element => {
  const {text, type, icon} = typeFilter;
  const {name, width, height} = icon;

  const handleTypeChange = () => {
    onChange(type);
  };

  return (
    <li className="filter__item">
      <input type="radio" name="type" id={type} checked={isActive} onChange={handleTypeChange} />
      <label className="filter__label" htmlFor={type}>
        <svg className="filter__icon" width={width} height={height} aria-hidden="true">
          <use xlinkHref={`#${name}`}></use>
        </svg>
        <span className="filter__label-text">{text}</span>
      </label>
    </li>
  );
};

export default TypeFilterItem;
