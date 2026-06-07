import JobCard from "../../components/job/JobCard/JobCard";
import Breadcrumbs from "../../components/ui/Breadcrumbs/Breadcrumbs";
import BackButton from "../../components/ui/BackButton/BackButton";
import {
  getFavorites,
} from "../../utils/favoritesStorage";

import styles from "./Favorites.module.css";

function Favorites() {
  const favorites =
    getFavorites();

  return (
    <section className={styles.favorites}>
      <div className={styles.container}>
        <BackButton />
        <Breadcrumbs
          items={[
            "Главная",
            "Избранное",
          ]}
        />
        <h1>
          Избранные вакансии
        </h1>

        {favorites.length ===
        0 ? (
          <p>
            Пока нет избранных
            вакансий
          </p>
        ) : (
          favorites.map((job) => (
            <JobCard
              key={job.id}
              job={job}
            />
          ))
        )}
      </div>
    </section>
  );
}

export default Favorites;