import jobsData from "../../data/jobsData";
import JobCard from "../../components/job/JobCard/JobCard";
import { deleteJob } from "../../utils/deleteJob";
import Breadcrumbs from "../../components/ui/Breadcrumbs/Breadcrumbs";
import BackButton from "../../components/ui/BackButton/BackButton";

const handleDelete = (id) => {
  deleteJob(id);

  window.location.reload();
};

function MyJobs() {
  const localJobs =
    JSON.parse(
      localStorage.getItem("jobs")
    ) || [];

  const allJobs = [
    ...jobsData,
    ...localJobs,
  ];

  return (
    <div
      style={{
        maxWidth: "1200px",
        margin: "40px auto",
        padding: "0 20px",
      }}
    >
      <BackButton />
      <Breadcrumbs
        items={[
          "Главная",
          "Мои вакансии",
        ]}
      />
      <h1>
        Мои вакансии
      </h1>

      {localJobs.length === 0 ? (
        <p>
          У вас пока нет вакансий
        </p>
      ) : (
              localJobs.map((job) => (
         <JobCard
  key={job.id}
  job={job}
  showDelete={true}
  onDelete={handleDelete}
/>
       ))
      )}
    </div>
  );
}

export default MyJobs;