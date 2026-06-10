import styles from "./JobFilter.module.css";

function JobFilter({
  filters,
  setFilters,
}) {
  return (
    <aside className={styles.sidebar}>
      <h3>Фильтры</h3>

      <div className={styles.group}>
        <label>Зарплата от</label>

        <input
          type="number"
          placeholder="20000"
          value={filters.salaryFrom}
          onChange={(e) =>
            setFilters({
              ...filters,
              salaryFrom:
                e.target.value,
            })
          }
        />
      </div>

      <div className={styles.group}>
        <label>Зарплата до</label>

        <input
          type="number"
          placeholder="150000"
          value={filters.salaryTo}
          onChange={(e) =>
            setFilters({
              ...filters,
              salaryTo:
                e.target.value,
            })
          }
        />
      </div>

      <div className={styles.group}>
        <label>Опыт работы</label>

        <select
          value={filters.experience}
          onChange={(e) =>
            setFilters({
              ...filters,
              experience:
                e.target.value,
            })
          }
        >
          <option>Любой</option>
          <option>Без опыта</option>
          <option>1-3 года</option>
          <option>3-5 лет</option>
          <option>Более 5 лет</option>
        </select>
      </div>

      <div className={styles.group}>
        <label>График работы</label>

        <select
          value={filters.schedule}
          onChange={(e) =>
            setFilters({
              ...filters,
              schedule:
                e.target.value,
            })
          }
        >
          <option>Любой</option>
          <option>Полный день</option>
          <option>Сменный график</option>
          <option>Гибкий график</option>
          <option>Удаленная работа</option>
          <option>Гибридный формат</option>
          <option>Вахтовый метод</option>
        </select>
      </div>

      <div className={styles.group}>
        <label>Город</label>

        <select
          value={filters.city}
          onChange={(e) =>
            setFilters({
              ...filters,
              city: e.target.value,
            })
          }
        >
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
      <button
  className={styles.applyBtn}
>
  Показать вакансии
</button>
<button
  className={styles.resetBtn}
  onClick={() =>
    setFilters({
      salaryFrom: "",
      salaryTo: "",
      experience: "Любой",
      schedule: "Любой",
      city: "Все города",
    })
  }
>
  Сбросить фильтр
</button>
    </aside>
    
  );
}

export default JobFilter;