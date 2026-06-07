import styles from "./JobSearch.module.css";

import { FaSearch } from "react-icons/fa";

function JobSearch({
  search,
  setSearch,
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
            setSearch(
              e.target.value
            )
          }
        />
      </div>

      <button>
        Поиск
      </button>
    </div>
  );
}

export default JobSearch;