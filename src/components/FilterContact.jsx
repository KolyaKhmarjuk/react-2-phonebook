import s from '../components/input.module.css';

const FilterContact = ({ filter, hendelChange }) => {
  return (
    <>
      <label className={s.filterLabel}>
        Find
        <input
          type="text"
          name="filter"
          value={filter}
          onChange={hendelChange}
          className={s.inputFilter}
        />
      </label>
    </>
  );
};

export default FilterContact;
