import clsx from 'clsx';
import './filter-item.scss';

const FilterItem = ({ name, title, checked, onChange }) => {
  const handleChange = (event) => {
    onChange(event);
  };

  return (
    <div className="filter-item">
      <input
        type="checkbox"
        id={title}
        name={name}
        value={title}
        onChange={handleChange}
        checked={checked}
      />
      <label htmlFor={title} className={clsx({ checked })}>
        {title}
      </label>
    </div>
  );
};

export default FilterItem;
