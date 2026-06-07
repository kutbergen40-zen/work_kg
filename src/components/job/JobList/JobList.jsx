import styles from "./JobList.module.css";

import { useState } from "react";

import JobCard from "../JobCard/JobCard";

import jobsData from "../../../data/jobsData";

function JobList({
  selectedCategory,
  search,
}) {
  const [
    selectedJob,
    setSelectedJob,
  ] = useState(null);

  const localJobs =
    JSON.parse(
      localStorage.getItem(
        "jobs"
      )
    ) || [];

  const allJobs = [
    ...jobsData,
    ...localJobs,
  ];

  const filteredSearch =
    allJobs.filter((job) => {
      const value =
        search.toLowerCase();

      return (
        job.title
          .toLowerCase()
          .includes(value) ||

        job.company
          .toLowerCase()
          .includes(value) ||

        job.city
          .toLowerCase()
          .includes(value) ||

        job.category
          .toLowerCase()
          .includes(value) ||

        job.specialization
          .toLowerCase()
          .includes(value)
      );
    });

  if (
    search.trim() !== ""
  ) {
    return (
      <div className={styles.cards}>
        <h2>
          Результаты поиска
        </h2>

        {filteredSearch.length >
        0 ? (
          filteredSearch.map(
            (job) => (
              <JobCard
                key={job.id}
                job={job}
              />
            )
          )
        ) : (
          <p
            className={
              styles.noJobs
            }
          >
            Ничего не найдено
          </p>
        )}
      </div>
    );
  }

  if (!selectedCategory) {
    return (
      <div className={styles.empty}>
        <h2>
          Выберите категорию
        </h2>

        <p>
          Сначала выберите
          категорию работы
        </p>
      </div>
    );
  }

  return (
    <div className={styles.wrapper}>
      <div className={styles.categoryTop}>
        <h2>
          {selectedCategory.title}
        </h2>

        <p>
          Выберите
          специализацию
        </p>
      </div>

      <div className={styles.jobsGrid}>
        {selectedCategory.jobs.map(
          (
            job,
            index
          ) => (
            <button
              key={index}
              className={`${styles.jobBtn} ${
                selectedJob ===
                job
                  ? styles.active
                  : ""
              }`}
              onClick={() =>
                setSelectedJob(
                  job
                )
              }
            >
              {job}
            </button>
          )
        )}
      </div>

      {selectedJob && (
        <div
          className={
            styles.cards
          }
        >
          <h3>
            Вакансии:
            <span>
              {
                selectedJob
              }
            </span>
          </h3>

          {allJobs
            .filter(
              (job) =>
                job.specialization ===
                selectedJob
            )
            .map((job) => (
              <JobCard
                key={job.id}
                job={job}
              />
            ))}

          {allJobs.filter(
            (job) =>
              job.specialization ===
              selectedJob
          ).length ===
            0 && (
            <p
              className={
                styles.noJobs
              }
            >
              Пока вакансий
              нет
            </p>
          )}
        </div>
      )}
    </div>
  );
}

export default JobList;