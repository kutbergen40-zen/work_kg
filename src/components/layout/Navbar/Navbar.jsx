import styles from "./Navbar.module.css";

import { NavLink } from "react-router-dom";

import { FiUser } from "react-icons/fi";

function Navbar() {
  return (
    <nav className={styles.navbar}>
      <ul className={styles.navLinks}>
        <li>
          <NavLink to="/">Главная</NavLink>
        </li>

        <li>
          <NavLink to="/jobs">Вакансии</NavLink>
        </li>

        <li>
          <NavLink to="/add-job">Добавить работу</NavLink>
        </li>

        <li>
          <NavLink to="/favorites">Избранное</NavLink>
        </li>
      </ul>

      <div className={styles.actions}>
        <NavLink to="/login" className={styles.login}>
          Войти
        </NavLink>

        <NavLink to="/register" className={styles.register}>
          Регистрация
        </NavLink>

        <button className={styles.profileBtn}>
          <FiUser />
        </button>
      </div>
    </nav>
  );
}

export default Navbar;