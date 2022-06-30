import FilterItem from '../filter-item/filter-item';
import './filters-container.scss';

function FiltersContainer({ name, filtersGroup, setFilter }) {
  const changeFilter = (event) => {
    setFilter(
      filtersGroup.map((filter) =>
        filter.title === event.target.value
          ? { ...filter, checked: !filter.checked }
          : filter
      )
    );
  };

  return (
    <ul className="filters-container">
      {!!filtersGroup &&
        filtersGroup.map((filter, index) => {
          return (
            <li key={index}>
              <FilterItem
                name={name}
                title={filter.title}
                checked={filter.checked}
                onChange={changeFilter}
              />
            </li>
          );
        })}
    </ul>
  );
}

export default FiltersContainer;
