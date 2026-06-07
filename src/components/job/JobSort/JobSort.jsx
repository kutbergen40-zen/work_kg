import styles from "./JobSort.module.css";

function JobSort() {
  return (
    <select className={styles.select}>
      <option>Сначала новые</option>
      <option>Высокая зарплата</option>
      <option>Низкая зарплата</option>
    </select>
  );
}

export default JobSort;