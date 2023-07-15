import { useDispatch, useSelector } from 'react-redux';
import { getFilter, setFilter } from 'redux/filterSlice';

export const Filter = () => {
  const filter = useSelector(getFilter);

  const dispatch = useDispatch();

  const onFilterChange = e => {
    dispatch(setFilter(e.target.value));
  };

  return (
    <input
      type="text"
      value={filter}
      onChange={onFilterChange}
      placeholder="Search by name"
    />
  );
};
