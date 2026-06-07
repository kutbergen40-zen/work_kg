import styles from "./Register.module.css";
import { Link } from "react-router-dom";
import Breadcrumbs from "../../components/ui/Breadcrumbs/Breadcrumbs";
import BackButton from "../../components/ui/BackButton/BackButton";
import {
  FaUser,
  FaEnvelope,
  FaLock,
  FaPhoneAlt,
} from "react-icons/fa";

function Register() {
  return (
    <section className={styles.register}>
      <div className={styles.container}>
          <BackButton />
        <Breadcrumbs
          items={[
            "Главная",
            "Регистрация",
          ]}
        />
        <div className={styles.card}>
          <div className={styles.top}>
            <h1>
              Регистрация
            </h1>

            <p>
              Создайте новый аккаунт
            </p>
          </div>

          <form className={styles.form}>
            {/* NAME */}
            <div className={styles.group}>
              <label>Имя</label>

              <div className={styles.inputBox}>
                <FaUser />

                <input
                  type="text"
                  placeholder="Введите имя"
                />
              </div>
            </div>

            {/* EMAIL */}
            <div className={styles.group}>
              <label>Email</label>

              <div className={styles.inputBox}>
                <FaEnvelope />

                <input
                  type="email"
                  placeholder="Введите email"
                />
              </div>
            </div>

            {/* PHONE */}
            <div className={styles.group}>
              <label>Телефон</label>

              <div className={styles.inputBox}>
                <FaPhoneAlt />

                <input
                  type="text"
                  placeholder="+996..."
                />
              </div>
            </div>

            {/* PASSWORD */}
            <div className={styles.group}>
              <label>Пароль</label>

              <div className={styles.inputBox}>
                <FaLock />

                <input
                  type="password"
                  placeholder="Введите пароль"
                />
              </div>
            </div>

            <button
              className={styles.registerBtn}
            >
              Зарегистрироваться
            </button>
          </form>

          <div className={styles.bottom}>
            Уже есть аккаунт?
            <Link to="/login">
              Войти
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Register;