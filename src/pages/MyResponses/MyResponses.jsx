import { useEffect, useState } from "react";

import Breadcrumbs from "../../components/ui/Breadcrumbs/Breadcrumbs";
import BackButton from "../../components/ui/BackButton/BackButton";
import styles from "./MyResponses.module.css";

import { supabase } from "../../lib/supabase";
import { useAuth } from "../../hooks/useAuth";

function MyResponses() {
  const { user } = useAuth();

  const [responses, setResponses] =
    useState([]);

  const [loading, setLoading] =
    useState(true);

  useEffect(() => {
    loadResponses();
  }, [user]);

  async function loadResponses() {
    if (!user) return;

    const { data, error } =
      await supabase
        .from("responses")
        .select("*")
        .eq("user_id", user.id)
        .order("created_at", {
          ascending: false,
        });

    if (error) {
      console.log(error);
      return;
    }

    setResponses(data);
    setLoading(false);
  }

  async function handleDelete(id) {
    const { error } =
      await supabase
        .from("responses")
        .delete()
        .eq("id", id);

    if (error) {
      console.log(error);
      return;
    }

    setResponses(
      responses.filter(
        (item) => item.id !== id
      )
    );
  }

  if (loading) {
    return <p>Загрузка...</p>;
  }

  return (
    <div className={styles.container}>
      <BackButton />

      <Breadcrumbs
        items={[
          "Главная",
          "Мои отклики",
        ]}
      />

      <h1 className={styles.title}>
        Мои отклики
      </h1>

      {responses.length === 0 ? (
        <p>
          Вы еще не отправили
          ни одного отклика
        </p>
      ) : (
        responses.map(
          (response) => (
            <div
              key={response.id}
              className={styles.card}
            >
              <h3 className={styles.jobTitle}>
                {response.job_title}
              </h3>

              <p className={styles.company}>
                Компания:
                {response.company}
              </p>

              <p className={styles.info}>
                Имя:
                {response.name}
              </p>

              <p className={styles.info}>
                Телефон:
                {response.phone}
              </p>

              <div
                className={
                  styles.message
                }
              >
                <strong>
                  Сообщение:
                </strong>

                <p>
                  {
                    response.message
                  }
                </p>
              </div>

              <button
                onClick={() =>
                  handleDelete(
                    response.id
                  )
                }
                className={
                  styles.deleteBtn
                }
              >
                Удалить
                отклик
              </button>
            </div>
          )
        )
      )}
    </div>
  );
}

export default MyResponses;