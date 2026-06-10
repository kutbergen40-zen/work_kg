import styles from "./JobSearch.module.css";
import { FaSearch } from "react-icons/fa";

function JobSearch({
  search,
  setSearch,
  setShowFilter,
}) {
  return (
    <div className={styles.search}>
      <div className={styles.inputBox}>
        <FaSearch className={styles.icon} />

        <input
          type="text"
          placeholder="Поиск вакансий..."
          value={search}
          onChange={(e) =>
            setSearch(e.target.value)
          }
        />
      </div>

      {/* ноутбук */}
      <button
        className={styles.searchBtn}
      >
        Поиск
      </button>

      {/* телефон */}
      <button
        className={styles.filterBtn}
        onClick={() =>
          setShowFilter(true)
        }
      >
        Фильтр
      </button>
    </div>
  );
}

export default JobSearch;