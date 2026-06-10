import { useState } from "react";
import styles from "./Login.module.css";
import { Link, useNavigate } from "react-router-dom";
import Breadcrumbs from "../../components/ui/Breadcrumbs/Breadcrumbs";
import BackButton from "../../components/ui/BackButton/BackButton";
import { supabase } from "../../lib/supabase";

import {
  FaEnvelope,
  FaLock,
} from "react-icons/fa";

function Login() {
  const navigate = useNavigate();

  const [email, setEmail] =
    useState("");

  const [password, setPassword] =
    useState("");

  const handleLogin = async (e) => {
  e.preventDefault();

  const { data, error } =
    await supabase.auth.signInWithPassword({
      email,
      password,
    });

  console.log("DATA:", data);
  console.log("ERROR:", error);

  if (error) {
    alert(error.message);
    return;
  }

  navigate("/profile");
};

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

          <form
            className={styles.form}
            onSubmit={handleLogin}
          >
            <div className={styles.group}>
              <label>Email</label>

              <div className={styles.inputBox}>
                <FaEnvelope />

                <input
                  type="email"
                  placeholder="Введите email"
                  value={email}
                  onChange={(e) =>
                    setEmail(
                      e.target.value
                    )
                  }
                />
              </div>
            </div>

            <div className={styles.group}>
              <label>Пароль</label>

              <div className={styles.inputBox}>
                <FaLock />

                <input
                  type="password"
                  placeholder="Введите пароль"
                  value={password}
                  onChange={(e) =>
                    setPassword(
                      e.target.value
                    )
                  }
                />
              </div>
            </div>

            <button
              type="submit"
              className={
                styles.loginBtn
              }
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