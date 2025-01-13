import React from 'react'
import styles from "./SearchBox.module.css";


export default function SearchBox({value, handleFilterChange}) {
  return (
    <form>
    <div>
      <label className={styles.searchBoxLabel}>
        Find contacts by name
        <input type="text" value={value} onChange={handleFilterChange} className={styles.searchBoxInput} />
      </label>
    </div>
     </form>
  )
}
