import styles from "./Footer.module.css";

import { Link } from "react-router-dom";

import {
  FaInstagram,
  FaTelegramPlane,
  FaWhatsapp,
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
} from "react-icons/fa";

function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        {/* COLUMN 1 */}
        <div className={styles.column}>
          <h2 className={styles.logo}>
            WorkKG
          </h2>

          <p className={styles.description}>
            Современная платформа
            поиска работы и сотрудников
            по всему Кыргызстану.
          </p>

          <div className={styles.socials}>
            <a href="/">
              <FaInstagram />
            </a>

            <a href="/">
              <FaTelegramPlane />
            </a>

            <a href="/">
              <FaWhatsapp />
            </a>
          </div>
        </div>

        {/* COLUMN 2 */}
        <div className={styles.column}>
          <h3>Навигация</h3>

          <div className={styles.links}>
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

            <Link to="/profile">
              Профиль
            </Link>
          </div>
        </div>

        {/* COLUMN 3 */}
        <div className={styles.column}>
          <h3>Контакты</h3>

          <div className={styles.contacts}>
            <p>
              <FaPhoneAlt />
              +996 700 00 00 00
            </p>

            <p>
              <FaEnvelope />
              workkg@gmail.com
            </p>

            <p>
              <FaMapMarkerAlt />
              Бишкек, Кыргызстан
            </p>
          </div>
        </div>
      </div>

      {/* BOTTOM */}
      <div className={styles.bottom}>
        © 2025 WorkKG. Все права
        защищены.
      </div>
    </footer>
  );
}

export default Footer;