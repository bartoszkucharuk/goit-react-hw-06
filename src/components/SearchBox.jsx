import { useDispatch } from "react-redux";
import styles from "./SearchBox.module.css";
import { setFilters } from "../redux/filterSlice";


export default function SearchBox() {
  const dispatch = useDispatch();
  const onChangeSearch = (event) => {
    dispatch(setFilters(event.target.value));
  };

  return (
    <form>
    <div>
      <label className={styles.searchBoxLabel}>
        Find contacts by name
          <input type="text"
            onChange={onChangeSearch} className={styles.searchBoxInput} />
      </label>
    </div>
     </form>
  )
}
