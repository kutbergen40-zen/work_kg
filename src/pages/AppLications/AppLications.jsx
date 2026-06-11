import styles from "./AppLications.module.css";

function Applications() {
  return (
    <section className={styles.applications}>
      <div className={styles.container}>
        <h1>Мои отклики</h1>

        <div className={styles.list}>
          <div className={styles.item}>
            <div>
              <h2>Официант</h2>

              <p>Navat</p>
            </div>

            <span>
              Отклик отправлен
            </span>
          </div>

          <div className={styles.item}>
            <div>
              <h2>Курьер</h2>

              <p>Glovo</p>
            </div>

            <span>
              На рассмотрении
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Applications;