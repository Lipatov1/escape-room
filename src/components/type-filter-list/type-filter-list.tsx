import TypeFilterItem from '../type-filter-item/type-filter-item';
import {useAppDispatch, useAppSelector} from '../../hooks';
import {getType} from '../../store/app/selectors';
import {setType} from '../../store/app/app-slice';
import React, {useCallback} from 'react';
import {TYPE_FILTERS} from '../../const';
import {Type} from '../../const';

const TypeFilterList = (): JSX.Element => {
  const dispatch = useAppDispatch();
  const activeType = useAppSelector(getType);

  const handleTypeChange = useCallback((type: Type) => {
    dispatch(setType(type));
  }, [dispatch]);

  return (
    <fieldset className="filter__section">
      <legend className="visually-hidden">Тематика</legend>
      <ul className="filter__list">
        {TYPE_FILTERS.map((type) => (
          <TypeFilterItem key={type.type} typeFilter={type} isActive={type.type === activeType} onChange={handleTypeChange} />
        ))}
      </ul>
    </fieldset>
  );
};

export default TypeFilterList;
