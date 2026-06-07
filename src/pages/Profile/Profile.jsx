import { FaMapMarkerAlt, FaPhoneAlt, FaTelegramPlane } from "react-icons/fa";
import styles from "./Profile.module.css";
import Breadcrumbs from "../../components/ui/Breadcrumbs/Breadcrumbs";
import BackButton from "../../components/ui/BackButton/BackButton";

function Profile() {
  return (
    <section className={styles.profile}>
      <div className={styles.container}>
        <BackButton />
        <Breadcrumbs
          items={[
            "Главная",
            "Профиль",
          ]}
        />
        <div className={styles.top}>
          <div className={styles.avatar}>
            A
          </div>

          <div>
            <h1>Азамат</h1>

            <p>
              Frontend разработчик
            </p>
          </div>
        </div>

        <div className={styles.content}>
          <div className={styles.card}>
            <h2>
              Личная информация
            </h2>

            <p>
                <FaMapMarkerAlt/>
               Бишкек
            </p>

            <p>
                <FaPhoneAlt/>
               +996 700 00 00 00
            </p>

            <p>
              <FaTelegramPlane/>
              @azamatdev
            </p>
          </div>

          <div className={styles.card}>
            <h2>О себе</h2>

            <p>
              React frontend developer.
              Ищу удаленную работу и
              интересные проекты.
            </p>
          </div>

          <div className={styles.card}>
            <h2>Навыки</h2>

            <div className={styles.skills}>
              <span>HTML</span>

              <span>CSS</span>

              <span>JavaScript</span>

              <span>React</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Profile;