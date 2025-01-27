import { useDispatch } from "react-redux";
import styles from "./SearchBox.module.css";
import { setFilters } from "../redux/filterSlice";


const SearchBox = () => {
  const dispatch = useDispatch();
  const onChangeSearch = (event) => {
    dispatch(setFilters(event.target.value));
  };

  return (
    <form>
      <div>
        <label className={styles.searchBoxLabel}>
          Find contacts by name:
          <input type="text"
            onChange={onChangeSearch} className={styles.searchBoxInput} placeholder="enter search name here..." />
        </label>
      </div>
    </form>
  );
};

export default SearchBox;