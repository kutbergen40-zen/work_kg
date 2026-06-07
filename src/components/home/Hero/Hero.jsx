import styles from "./Hero.module.css";

function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.container}>
        <div className={styles.content}>
          <h1>
            Найди работу <span>в Кыргызстане</span>
          </h1>

          <p>
            WorkHub KG помогает людям быстро находить работу,
            подработку и вакансии по всему Кыргызстану.
          </p>

          <div className={styles.buttons}>
            <button className={styles.primaryBtn}>
              Найти работу
            </button>

            <button className={styles.secondaryBtn}>
              Добавить вакансию
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;