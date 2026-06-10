import { useState } from "react";
import {
  Link,
  NavLink,
} from "react-router-dom";

import styles from "./Header.module.css";
import { useAuth } from "../../../hooks/useAuth";

import {
  FaBars,
  FaTimes,
  FaUser,
} from "react-icons/fa";

function Header() {
  const [menuOpen, setMenuOpen] =
    useState(false);

  const { user } = useAuth();

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <Link
          to="/"
          className={styles.logo}
        >
          Work
          <span className={styles.kg}>
            KG
          </span>
        </Link>

        <nav className={styles.nav}>
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive
                ? styles.activeLink
                : ""
            }
          >
            Главная
          </NavLink>

          <NavLink
            to="/jobs"
            className={({ isActive }) =>
              isActive
                ? styles.activeLink
                : ""
            }
          >
            Вакансии
          </NavLink>

          <NavLink
            to="/add-job"
            className={({ isActive }) =>
              isActive
                ? styles.activeLink
                : ""
            }
          >
            Добавить вакансию
          </NavLink>

          <NavLink
            to="/favorites"
            className={({ isActive }) =>
              isActive
                ? styles.activeLink
                : ""
            }
          >
            Избранное
          </NavLink>

          <NavLink
            to="/my-jobs"
            className={({ isActive }) =>
              isActive
                ? styles.activeLink
                : ""
            }
          >
            Мои вакансии
          </NavLink>

          <NavLink
            to="/my-responses"
            className={({ isActive }) =>
              isActive
                ? styles.activeLink
                : ""
            }
          >
            Мои отклики
          </NavLink>

          {!user && (
            <>
              <NavLink
                to="/login"
                className={({
                  isActive,
                }) =>
                  isActive
                    ? styles.activeLink
                    : ""
                }
              >
                Войти
              </NavLink>

              <NavLink
                to="/register"
                className={({
                  isActive,
                }) =>
                  isActive
                    ? styles.activeLink
                    : ""
                }
              >
                Регистрация
              </NavLink>
            </>
          )}
        </nav>

        <div className={styles.actions}>
          <NavLink
            to="/profile"
            className={({
              isActive,
            }) =>
              `${styles.profileBtn} ${
                isActive
                  ? styles.profileActive
                  : ""
              }`
            }
          >
            <FaUser />
          </NavLink>

          <button
            className={
              styles.burger
            }
            onClick={() =>
              setMenuOpen(
                !menuOpen
              )
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

      <div
        className={`${styles.mobileMenu} ${
          menuOpen
            ? styles.active
            : ""
        }`}
      >
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive
              ? styles.activeLink
              : ""
          }
          onClick={() =>
            setMenuOpen(false)
          }
        >
          Главная
        </NavLink>

        <NavLink
          to="/jobs"
          className={({ isActive }) =>
            isActive
              ? styles.activeLink
              : ""
          }
          onClick={() =>
            setMenuOpen(false)
          }
        >
          Вакансии
        </NavLink>

        <NavLink
          to="/add-job"
          className={({ isActive }) =>
            isActive
              ? styles.activeLink
              : ""
          }
          onClick={() =>
            setMenuOpen(false)
          }
        >
          Добавить вакансию
        </NavLink>

        <NavLink
          to="/favorites"
          className={({ isActive }) =>
            isActive
              ? styles.activeLink
              : ""
          }
          onClick={() =>
            setMenuOpen(false)
          }
        >
          Избранное
        </NavLink>

        <NavLink
          to="/my-jobs"
          className={({ isActive }) =>
            isActive
              ? styles.activeLink
              : ""
          }
          onClick={() =>
            setMenuOpen(false)
          }
        >
          Мои вакансии
        </NavLink>

        <NavLink
          to="/my-responses"
          className={({ isActive }) =>
            isActive
              ? styles.activeLink
              : ""
          }
          onClick={() =>
            setMenuOpen(false)
          }
        >
          Мои отклики
        </NavLink>

        {user ? (
          <NavLink
            to="/profile"
            className={({
              isActive,
            }) =>
              isActive
                ? styles.activeLink
                : ""
            }
            onClick={() =>
              setMenuOpen(false)
            }
          >
          </NavLink>
        ) : (
          <>
            <NavLink
              to="/login"
              className={({
                isActive,
              }) =>
                isActive
                  ? styles.activeLink
                  : ""
              }
              onClick={() =>
                setMenuOpen(false)
              }
            >
              Войти
            </NavLink>

            <NavLink
              to="/register"
              className={({
                isActive,
              }) =>
                isActive
                  ? styles.activeLink
                  : ""
              }
              onClick={() =>
                setMenuOpen(false)
              }
            >
              Регистрация
            </NavLink>
          </>
        )}
      </div>
    </header>
  );
}

export default Header;