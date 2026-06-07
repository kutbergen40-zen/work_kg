import Breadcrumbs from "../../components/ui/Breadcrumbs/Breadcrumbs";
import BackButton from "../../components/ui/BackButton/BackButton";
import styles from "./MyResponses.module.css";

function MyResponses() {
  const responses =
    JSON.parse(
      localStorage.getItem(
        "responses"
      )
    ) || [];

    const handleDelete = (index) => {
  const updatedResponses =
    responses.filter(
      (_, i) => i !== index
    );

  localStorage.setItem(
    "responses",
    JSON.stringify(
      updatedResponses
    )
  );

  window.location.reload();
};

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
          (
            response,
            index
          ) => (
           <div
              key={index}
              className={styles.card}
            >
              <h3 className={styles.jobTitle}>
                {response.jobTitle}
              </h3>

              <p className={styles.company}>
                Компания:
                {
                  response.company
                }
              </p>

              <p className={styles.info}>
                Имя:
                {response.name}
              </p>

              <p className={styles.info}>
                Телефон:
                {
                  response.phone
                }
              </p>

              <div className={styles.message}>
                <strong>
                  Сообщение:
                </strong>
              
                <p>
                  {response.message}
                </p>
              </div>
              <button
  onClick={() =>
    handleDelete(index)
  }
  className={styles.deleteBtn}
>
  Удалить отклик
</button>
            </div>
          )
        )
      )}
    </div>
  );
}

export default MyResponses;