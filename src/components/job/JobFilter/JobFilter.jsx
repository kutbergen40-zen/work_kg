import styles from "./JobFilter.module.css";

function JobFilter() {
  return (
    <aside className={styles.sidebar}>
      <h3>Фильтры</h3>

      <div className={styles.group}>
        <label>Зарплата от</label>

        <input type="number" placeholder="20000" />
      </div>

      <div className={styles.group}>
        <label>Зарплата до</label>

        <input type="number" placeholder="150000" />
      </div>

      <div className={styles.group}>
        <label>Опыт работы</label>

        <select>
          <option>Любой</option>
          <option>Без опыта</option>
          <option>1-3 года</option>
          <option>3-5 лет</option>
        </select>
      </div>

      <div className={styles.group}>
        <label>График работы</label>

        <select>
          <option>Любой</option>
          <option>Полный день</option>
          <option>Сменный</option>
          <option>Удаленная работа</option>
        </select>
      </div>

      <div className={styles.group}>
        <label>Город</label>

        <select>
          <option>Все города</option>
          <option>Бишкек</option>
          <option>Токмок</option>
          <option>Кант</option>
          <option>Кара-Балта</option>
          <option>Шопоков</option>
          <option>Орловка</option>
          <option>Кемин</option>
          <option>Каракол</option>
          <option>Балыкчы</option>
          <option>Чолпон-Ата</option>
          <option>Джалал-Абад</option>
          <option>Таш-Кумыр</option>
          <option>Майлуу-Суу</option>
          <option>Кара-Куль</option>
          <option>Кочкор-Ата</option>
          <option>Кербен</option>
          <option>Ноокат</option>
          <option>Базар-Коргон</option>
          <option>Узген</option>
          <option>Кара-Суу</option>
          <option>Баткен</option>
          <option>Кызыл-Кия</option>
          <option>Сулюкта</option>
          <option>Кадамжай</option>
          <option>Исфан</option>
          <option>Айдаркен</option>
          <option>Нарын</option>
          <option>Талас</option>
          <option>Ош</option>
        </select>
      </div>
    </aside>
  );
}

export default JobFilter;