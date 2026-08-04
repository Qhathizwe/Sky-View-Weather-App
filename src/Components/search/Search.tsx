import styles from './Search.module.css'

 const Search = () => {
  return (
    <div className={styles.searchContainer}>
        <input type="text" id="search" name="search" placeholder="Enter a location here" className={styles.searchInput}/>
        <button className={styles.myLocation}>Use My Location</button>
    </div>
  )
}
export default Search
