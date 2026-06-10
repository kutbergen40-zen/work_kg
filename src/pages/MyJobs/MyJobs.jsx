import { useEffect, useState } from "react";

import JobCard from "../../components/job/JobCard/JobCard";
import Breadcrumbs from "../../components/ui/Breadcrumbs/Breadcrumbs";
import BackButton from "../../components/ui/BackButton/BackButton";

import { supabase } from "../../lib/supabase";
import { useAuth } from "../../hooks/useAuth";

function MyJobs() {
  const { user } = useAuth();

  const [jobs, setJobs] =
    useState([]);

  const [loading, setLoading] =
    useState(true);

  useEffect(() => {
    loadJobs();
  }, [user]);

  async function loadJobs() {
    if (!user) return;

    const { data, error } =
      await supabase
        .from("jobs")
        .select("*")
        .eq("user_id", user.id)
        .order("created_at", {
          ascending: false,
        });

    if (error) {
      console.log(error);
      return;
    }

    setJobs(data);
    setLoading(false);
  }

  async function handleDelete(id) {
    const { error } =
      await supabase
        .from("jobs")
        .delete()
        .eq("id", id);

    if (error) {
      console.log(error);
      alert("Ошибка удаления");
      return;
    }

    setJobs(
      jobs.filter(
        (job) => job.id !== id
      )
    );
  }

  if (loading) {
    return (
      <div
        style={{
          maxWidth: "1200px",
          margin: "40px auto",
        }}
      >
        Загрузка...
      </div>
    );
  }

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

      <h1>Мои вакансии</h1>

      {jobs.length === 0 ? (
        <p>
          У вас пока нет вакансий
        </p>
      ) : (
        jobs.map((job) => (
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