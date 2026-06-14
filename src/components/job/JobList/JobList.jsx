import { useState, useEffect } from "react";
import { supabase } from "../../../lib/supabase";
import styles from "./JobList.module.css";
import JobCard from "../JobCard/JobCard";

function JobList({ selectedCategory, search, filters }) {
  const [selectedJob, setSelectedJob] = useState(() => {
    return localStorage.getItem("selectedJob") || null;
  });

  const [allJobs, setAllJobs] = useState([]);

useEffect(() => {
  setSelectedJob(null);
  localStorage.removeItem("selectedJob");
}, [selectedCategory]);

  useEffect(() => {
    if (selectedJob) {
      localStorage.setItem("selectedJob", selectedJob);
    } else {
      localStorage.removeItem("selectedJob");
    }
  }, [selectedJob]);

  useEffect(() => {
    async function loadJobs() {
      const { data, error } = await supabase.from("jobs").select("*");
      if (!error) {
        setAllJobs(data);
      }
    }
    loadJobs();
  }, []);

  const filteredSearch =
    allJobs.filter((job) => {
      const value =
        search.toLowerCase();

      return (
        (job.title || "")
          .toLowerCase()
          .includes(value) ||
        (job.company || "")
          .toLowerCase()
          .includes(value) ||
        (job.city || "")
          .toLowerCase()
          .includes(value) ||
        (job.category || "")
          .toLowerCase()
          .includes(value) ||
        (job.specialization || "")
          .toLowerCase()
          .includes(value)
      );
    });

 const filteredJobs =
  allJobs.filter((job) => {
if (selectedJob) {
  if (
    job.specialization !==
    selectedJob
  ) {
    return false;
  }
}

else if (selectedCategory) {
  if (
    !selectedCategory.jobs.includes(
      job.specialization
    )
  ) {
    return false;
  }
}

    if (
      search.trim() !== ""
    ) {
      const value =
        search.toLowerCase();

      const found =
        (job.title || "")
          .toLowerCase()
          .includes(value) ||
        (job.company || "")
          .toLowerCase()
          .includes(value) ||
        (job.city || "")
          .toLowerCase()
          .includes(value) ||
        (job.category || "")
          .toLowerCase()
          .includes(value) ||
        (
          job.specialization ||
          ""
        )
          .toLowerCase()
          .includes(value);

      if (!found)
        return false;
    }

    const salaryParts =
      (job.salary || "")
        .replace(/\s/g, "")
        .split("-");

    const salaryFromJob =
      Number(
        salaryParts[0]
      ) || 0;

    const salaryToJob =
      Number(
        salaryParts[1]
      ) ||
      salaryFromJob;

    if (
      filters.salaryFrom &&
      salaryToJob <
        Number(
          filters.salaryFrom
        )
    )
      return false;

    if (
      filters.salaryTo &&
      salaryFromJob >
        Number(
          filters.salaryTo
        )
    )
      return false;

    if (
      filters.city !==
        "Все города" &&
      job.city !==
        filters.city
    )
      return false;

    if (
      filters.experience !==
        "Любой" &&
      job.experience !==
        filters.experience
    )
      return false;

    if (
      filters.schedule !==
        "Любой" &&
      job.schedule !==
        filters.schedule
    )
      return false;

    return true;
  });

  return (
    <div className={styles.wrapper}>
      {selectedCategory && (
        <>
          <div
            className={
              styles.categoryTop
            }
          >
            <h2>
              {
                selectedCategory.title
              }
            </h2>

            <p>
              Выберите
              специализацию
            </p>
          </div>

          <div
            className={
              styles.jobsGrid
            }
          >
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
                  onClick={() => {
                    setSelectedJob(job);
                  }}             
                >
                  {job}
                </button>
              )
            )}
          </div>
        </>
      )}

      <div
        className={
          styles.cards
        }
      >
        {selectedJob && (
          <h3>
            Вакансии:
            <span>
              {
                selectedJob
              }
            </span>
          </h3>
        )}

        {filteredJobs.map(
          (job) => (
            <JobCard
              key={job.id}
              job={job}
            />
          )
        )}

        {filteredJobs.length ===
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
    </div>
  );
}


export default JobList;