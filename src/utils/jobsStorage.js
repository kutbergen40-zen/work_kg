export const getJobs = () => {
  const jobs =
    localStorage.getItem("jobs");

  return jobs ? JSON.parse(jobs) : [];
};

export const saveJob = (job) => {
  const jobs = getJobs();

  jobs.push(job);

  localStorage.setItem(
    "jobs",
    JSON.stringify(jobs)
  );
};