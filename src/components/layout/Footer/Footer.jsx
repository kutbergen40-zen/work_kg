import { useTranslation } from "react-i18next";
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
  const { t } = useTranslation();

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        {/* COLUMN 1 */}
        <div className={styles.column}>
          <h2 className={styles.logo}>
            WorkKG
          </h2>

          <p className={styles.description}>
            {t("footer.about")}
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
          <h3>{t("nav.home")}</h3>

          <div className={styles.links}>
            <Link to="/">
              {t("nav.home")}
            </Link>

            <Link to="/jobs">
              {t("nav.jobs")}
            </Link>

            <Link to="/add-job">
              {t("nav.addJob")}
            </Link>

            <Link to="/favorites">
              {t("nav.favorites")}
            </Link>

            <Link to="/my-jobs">
              {t("nav.myJobs")}
            </Link>

            <Link to="/my-responses">
              {t("nav.myResponses")}
            </Link>

            <Link to="/profile">
              {t("nav.profile")}
            </Link>
          </div>
        </div>

        {/* COLUMN 3 */}
        <div className={styles.column}>
          <h3>{t("footer.contact")}</h3>

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