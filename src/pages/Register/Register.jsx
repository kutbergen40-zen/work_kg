import styles from "./Register.module.css";
import { Link } from "react-router-dom";
import { useState } from "react";
import { supabase } from "../../lib/supabase";

import Breadcrumbs from "../../components/ui/Breadcrumbs/Breadcrumbs";
import BackButton from "../../components/ui/BackButton/BackButton";

import {
  FaUser,
  FaEnvelope,
  FaLock,
  FaPhoneAlt,
} from "react-icons/fa";

function Register() {
  const [name, setName] =
    useState("");

  const [email, setEmail] =
    useState("");

  const [phone, setPhone] =
    useState("");

  const [password, setPassword] =
    useState("");

  const [loading, setLoading] =
    useState(false);

  const handleRegister =
    async (e) => {
      e.preventDefault();

      setLoading(true);

   const {
  data,
  error,
} =
  await supabase.auth.signUp({
    email,
    password,
    options: {
      data: {
        name,
        phone,
        city: "",
        telegram: "",
        profession: "",
        about: "",
        skills: "",
      },
    },
  });

      if (error) {
        alert(error.message);

        setLoading(false);

        return;
      }

      alert(
        "Регистрация успешна. Проверьте почту для подтверждения."
      );

      console.log(data);

      setName("");
      setEmail("");
      setPhone("");
      setPassword("");

      setLoading(false);
    };

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

          <form
            className={styles.form}
            onSubmit={
              handleRegister
            }
          >
            <div
              className={styles.group}
            >
              <label>
                Имя
              </label>

              <div
                className={
                  styles.inputBox
                }
              >
                <FaUser />

                <input
                  type="text"
                  placeholder="Введите имя"
                  value={name}
                  onChange={(e) =>
                    setName(
                      e.target.value
                    )
                  }
                  required
                />
              </div>
            </div>

            <div
              className={styles.group}
            >
              <label>
                Email
              </label>

              <div
                className={
                  styles.inputBox
                }
              >
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
                  required
                />
              </div>
            </div>

            <div
              className={styles.group}
            >
              <label>
                Телефон
              </label>

              <div
                className={
                  styles.inputBox
                }
              >
                <FaPhoneAlt />

                <input
                  type="text"
                  placeholder="+996..."
                  value={phone}
                  onChange={(e) =>
                    setPhone(
                      e.target.value
                    )
                  }
                />
              </div>
            </div>

            <div
              className={styles.group}
            >
              <label>
                Пароль
              </label>

              <div
                className={
                  styles.inputBox
                }
              >
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
                  required
                />
              </div>
            </div>

            <button
              type="submit"
              className={
                styles.registerBtn
              }
              disabled={
                loading
              }
            >
              {loading
                ? "Регистрация..."
                : "Зарегистрироваться"}
            </button>
          </form>

          <div
            className={styles.bottom}
          >
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