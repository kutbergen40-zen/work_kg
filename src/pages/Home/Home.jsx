import styles from "./Home.module.css";

import { Link } from "react-router-dom";

import {
  FaBriefcase,
  FaUsers,
  FaMapMarkerAlt,
  FaRocket,
  FaShieldAlt,
  FaClock,
} from "react-icons/fa";

function Home() {
  return (
    <section className={styles.home}>
      <div className={styles.container}>
        {/* HERO */}
        <div className={styles.hero}>
          <div className={styles.badge}>
            Работа по всему Кыргызстану
          </div>

          <h1>
            Найди работу
            <span>
              быстро и удобно
            </span>
          </h1>

          <p>
            Современная платформа для
            поиска вакансий,
            сотрудников и подработки
            по всему Кыргызстану
          </p>

          {/* HERO CARDS */}
          <div className={styles.heroCards}>
            <div className={styles.heroCard}>
              <h3>5000+</h3>

              <p>
                Компаний ищут
                сотрудников
              </p>
            </div>

            <div className={styles.heroCard}>
              <h3>10000+</h3>

              <p>
                Актуальных вакансий
              </p>
            </div>

            <div className={styles.heroCard}>
              <h3>24/7</h3>

              <p>
                Доступ к платформе
              </p>
            </div>
          </div>

          <div className={styles.buttons}>
            <Link to="/jobs">
              Найти работу
            </Link>

            <Link to="/add-job">
              Добавить вакансию
            </Link>
          </div>
        </div>

        {/* STATS */}
        <div className={styles.stats}>
          <div className={styles.stat}>
            <FaBriefcase />

            <h2>10 000+</h2>

            <p>Вакансий</p>
          </div>

          <div className={styles.stat}>
            <FaUsers />

            <h2>5 000+</h2>

            <p>Компаний</p>
          </div>

          <div className={styles.stat}>
            <FaMapMarkerAlt />

            <h2>20+</h2>

            <p>Городов</p>
          </div>
        </div>

        {/* ABOUT */}
        <div className={styles.about}>
          <div className={styles.left}>
            <h2>
              Почему выбирают нас?
            </h2>

            <p>
              Мы создали платформу,
              где любой человек может
              быстро найти работу —
              от офисных вакансий до
              рабочих специальностей.
            </p>
          </div>

          <div className={styles.right}>
            <div className={styles.feature}>
              <FaRocket />

              <div>
                <h3>
                  Быстрый поиск
                </h3>

                <p>
                  Находите вакансии
                  за несколько минут
                </p>
              </div>
            </div>

            <div className={styles.feature}>
              <FaShieldAlt />

              <div>
                <h3>
                  Надежные компании
                </h3>

                <p>
                  Проверенные
                  работодатели
                </p>
              </div>
            </div>

            <div className={styles.feature}>
              <FaClock />

              <div>
                <h3>
                  Экономия времени
                </h3>

                <p>
                  Удобный интерфейс
                  и фильтрация
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* INFO */}
        <div className={styles.infoSection}>
          <div className={styles.infoContent}>
            <span>
              Современная платформа
              поиска работы
            </span>

            <h2>
              WorkKG помогает людям и
              компаниям находить друг
              друга быстрее
            </h2>

            <p>
              Мы объединяем
              работодателей и
              соискателей со всего
              Кыргызстана. На платформеможно найти как
              подработку, так и
              постоянную работу в любой
              сфере: IT,
              строительство,
              рестораны, доставка,
              медицина, производство и
              многое другое.
            </p>

            <div className={styles.infoGrid}>
              <div>
                <h3>Быстро</h3>

                <p>
                  Поиск вакансий за
                  пару минут
                </p>
              </div>

              <div>
                <h3>Удобно</h3>

                <p>
                  Простой и современный
                  интерфейс
                </p>
              </div>

              <div>
                <h3>Надежно</h3>

                <p>
                  Проверенные
                  работодатели
                </p>
              </div>

              <div>
                <h3>Для всех</h3>

                <p>
                  От студентов до
                  специалистов
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Home;