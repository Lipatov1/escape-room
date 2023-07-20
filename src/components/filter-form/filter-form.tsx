import LevelFilterList from '../level-filter-list/level-filter-list';
import TypeFilterList from '../type-filter-list/type-filter-list';

const FilterForm = (): JSX.Element => (
  <form className="filter" action="#" method="get">
    <TypeFilterList />
    <LevelFilterList />
  </form>
);

export default FilterForm;
