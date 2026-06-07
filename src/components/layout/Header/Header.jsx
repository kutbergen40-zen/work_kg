import { useState } from "react";

import { Link } from "react-router-dom";

import styles from "./Header.module.css";

import {
  FaBars,
  FaTimes,
  FaUser,
} from "react-icons/fa";

function Header() {
  const [menuOpen, setMenuOpen] =
    useState(false);

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        {/* LOGO */}
        <Link
          to="/"
          className={styles.logo}
        >
          Work
          <span className={styles.kg}>KG</span>
        </Link>

        {/* DESKTOP NAV */}
        <nav className={styles.nav}>
          <Link to="/">
            Главная
          </Link>

          <Link to="/jobs">
            Вакансии
          </Link>

          <Link to="/add-job">
            Добавить вакансию
          </Link>

          <Link to="/favorites">
            Избранное
          </Link>

          <Link to="/my-jobs">
             Мои вакансии
          </Link>

          <Link to="/my-responses">
             Мои отклики
          </Link>

          <Link to="/login">
            Войти
          </Link>
          
          <Link to="/register">
            Регистрация
          </Link>
        </nav>

        {/* ACTIONS */}
        <div className={styles.actions}>
          <Link
            to="/profile"
            className={styles.profileBtn}
          >
            <FaUser />
          </Link>

          {/* BURGER */}
          <button
            className={styles.burger}
            onClick={() =>
              setMenuOpen(!menuOpen)
            }
          >
            {menuOpen ? (
              <FaTimes />
            ) : (
              <FaBars />
            )}
          </button>
        </div>
      </div>

      {/* MOBILE MENU */}
      <div
        className={`${styles.mobileMenu} ${
          menuOpen
            ? styles.active
            : ""
        }`}
      >
        <Link
          to="/"
          onClick={() =>
            setMenuOpen(false)
          }
        >
          Главная
        </Link>

        <Link
          to="/jobs"
          onClick={() =>
            setMenuOpen(false)
          }
        >
          Вакансии
        </Link>

        <Link
          to="/add-job"
          onClick={() =>
            setMenuOpen(false)
          }
        >
          Добавить вакансию
        </Link>

        <Link
          to="/favorites"
          onClick={() =>
            setMenuOpen(false)
          }
        >
          Избранное
        </Link>

        <Link
          to="/profile"
          onClick={() =>
            setMenuOpen(false)
          }
        >
          Профиль
        </Link>
        <Link
  to="/login"
  onClick={() =>
    setMenuOpen(false)
  }
>
  Войти
</Link>

<Link
  to="/register"
  onClick={() =>
    setMenuOpen(false)
  }
>
  Регистрация
</Link>
      </div>
    </header>
  );
}

export default Header;