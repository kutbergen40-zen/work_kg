import styles from "./PopularJobs.module.css";

import JobCard from "../../job/JobCard/JobCard";

function PopularJobs() {
  const jobs = [
    {
      id: 1,
      title: "Frontend Developer",
      company: "Tech KG",
      salary: "$800",
      location: "Бишкек",
    },

    {
      id: 2,
      title: "UI/UX Designer",
      company: "Creative Studio",
      salary: "$600",
      location: "Ош",
    },

    {
      id: 3,
      title: "SMM Manager",
      company: "Media Group",
      salary: "$500",
      location: "Бишкек",
    },
  ];

  return (
    <section className={styles.jobs}>
      <div className={styles.container}>
        <h2>Популярные вакансии</h2>

        <div className={styles.grid}>
          {jobs.map((job) => (
            <JobCard key={job.id} job={job} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default PopularJobs;