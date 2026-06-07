import styles from "./Login.module.css";
import { Link } from "react-router-dom";
import Breadcrumbs from "../../components/ui/Breadcrumbs/Breadcrumbs";
import BackButton from "../../components/ui/BackButton/BackButton";
import {
  FaEnvelope,
  FaLock,
} from "react-icons/fa";

function Login() {
  return (
    <section className={styles.login}>
      <div className={styles.container}>
          <BackButton />
        <Breadcrumbs
          items={[
            "Главная",
            "Вход",
          ]}
        />
        <div className={styles.card}>
          <div className={styles.top}>
            <h1>Вход</h1>

            <p>
              Войдите в свой аккаунт
            </p>
          </div>

          <form className={styles.form}>
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
              className={styles.loginBtn}
            >
              Войти
            </button>
          </form>

          <div className={styles.bottom}>
            Нет аккаунта?
            <Link to="/register">
                Зарегистрироваться
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Login;