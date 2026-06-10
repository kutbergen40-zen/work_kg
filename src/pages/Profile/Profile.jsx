import {
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaTelegramPlane,
  FaUserTie,
} from "react-icons/fa";

import styles from "./Profile.module.css";

import Breadcrumbs from "../../components/ui/Breadcrumbs/Breadcrumbs";
import BackButton from "../../components/ui/BackButton/BackButton";

import { useNavigate } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth";

function Profile() {
  const navigate = useNavigate();

  const {
    user,
    logout,
  } = useAuth();

  const handleLogout =
    async () => {
      await logout();

      navigate("/login");
    };

  const avatar =
    user?.user_metadata?.name
      ? user.user_metadata.name[0].toUpperCase()
      : "A";

  const skills =
    user?.user_metadata?.skills
      ? user.user_metadata.skills
          .split(",")
          .map((item) =>
            item.trim()
          )
      : [];

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
            {avatar}
          </div>

          <div>
            <h1>
              {user
                ?.user_metadata
                ?.name ||
                "Пользователь"}
            </h1>

            <p>
              {user
                ?.user_metadata
                ?.profession ||
                "Профессия не указана"}
            </p>
          </div>
        </div>

        <div
          className={styles.buttons}
        >
          <button
            className={
              styles.editBtn
            }
            onClick={() =>
              navigate(
                "/edit-profile"
              )
            }
          >
            Редактировать
            профиль
          </button>

          <button
            className={
              styles.logoutBtn
            }
            onClick={
              handleLogout
            }
          >
            Выйти
          </button>
        </div>

        <div
          className={
            styles.content
          }
        >
          <div
            className={
              styles.card
            }
          >
            <h2>
              Личная
              информация
            </h2>

            <p>
              <FaMapMarkerAlt />

              {user
                ?.user_metadata
                ?.city ||
                "Город не указан"}
            </p>

            <p>
              <FaPhoneAlt />

              {user
                ?.user_metadata
                ?.phone ||
                "Телефон не указан"}
            </p>

            <p>
              <FaTelegramPlane />

              {user
                ?.user_metadata
                ?.telegram ||
                "Telegram не указан"}
            </p>

            <p>
              <FaUserTie />

              {user
                ?.user_metadata
                ?.profession ||
                "Профессия не указана"}
            </p>
          </div>

          <div
            className={
              styles.card
            }
          >
            <h2>
              О себе
            </h2>

            <p>
              {user
                ?.user_metadata
                ?.about ||
                "Информация отсутствует"}
            </p>
          </div>

          <div
            className={
              styles.card
            }
          >
            <h2>
              Навыки
            </h2>

            <div
              className={
                styles.skills
              }
            >
              {skills.length >
              0 ? (
                skills.map(
                  (
                    skill,
                    index
                  ) => (
                    <span
                      key={
                        index
                      }
                    >
                      {
                        skill
                      }
                    </span>
                  )
                )
              ) : (
                <p>
                  Навыки не
                  указаны
                </p>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Profile;