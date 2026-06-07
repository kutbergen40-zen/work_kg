export const deleteJob = (id) => {
  const jobs =
    JSON.parse(
      localStorage.getItem("jobs")
    ) || [];

  const updatedJobs =
    jobs.filter(
      (job) => job.id !== id
    );

  localStorage.setItem(
    "jobs",
    JSON.stringify(updatedJobs)
  );
};