import { useState } from "react";
import {
  Link,
  NavLink,
} from "react-router-dom";
import { useTranslation } from "react-i18next";

import styles from "./Header.module.css";
import { useAuth } from "../../../hooks/useAuth";
import LanguageDropdown from "../../common/LanguageDropdown/LanguageDropdown";

import {
  FaBars,
  FaTimes,
  FaUser,
} from "react-icons/fa";

function Header() {
  const [menuOpen, setMenuOpen] =
    useState(false);
  const { t } = useTranslation();

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
            {t("nav.home")}
          </NavLink>

          <NavLink
            to="/jobs"
            className={({ isActive }) =>
              isActive
                ? styles.activeLink
                : ""
            }
          >
            {t("nav.jobs")}
          </NavLink>

          <NavLink
            to="/add-job"
            className={({ isActive }) =>
              isActive
                ? styles.activeLink
                : ""
            }
          >
            {t("nav.addJob")}
          </NavLink>

          <NavLink
            to="/favorites"
            className={({ isActive }) =>
              isActive
                ? styles.activeLink
                : ""
            }
          >
            {t("nav.favorites")}
          </NavLink>

          <NavLink
            to="/my-jobs"
            className={({ isActive }) =>
              isActive
                ? styles.activeLink
                : ""
            }
          >
            {t("nav.myJobs")}
          </NavLink>

          <NavLink
            to="/my-responses"
            className={({ isActive }) =>
              isActive
                ? styles.activeLink
                : ""
            }
          >
            {t("nav.myResponses")}
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
                {t("nav.login")}
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
                {t("nav.register")}
              </NavLink>
            </>
          )}
        </nav>

        <div className={styles.actions}>
          <LanguageDropdown />

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
          {t("nav.home")}
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
          {t("nav.jobs")}
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
          {t("nav.addJob")}
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
          {t("nav.favorites")}
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
          {t("nav.myJobs")}
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
          {t("nav.myResponses")}
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
              {t("nav.login")}
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
              {t("nav.register")}
            </NavLink>
          </>
        )}
      </div>
    </header>
  );
}

export default Header;