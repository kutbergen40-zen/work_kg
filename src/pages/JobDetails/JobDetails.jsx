import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { supabase } from "../../lib/supabase";
import { useAuth } from "../../hooks/useAuth";
import ApplyModal from "../../components/job/ApplyModal/ApplyModal";
import { useTranslation } from "react-i18next";
import styles from "./JobDetails.module.css";
import Breadcrumbs from "../../components/ui/Breadcrumbs/Breadcrumbs";
import BackButton from "../../components/ui/BackButton/BackButton";

import {
  FaMapMarkerAlt,
  FaMoneyBillWave,
  FaClock,
  FaBriefcase,
  FaWhatsapp,
  FaTelegramPlane,
  FaPhoneAlt,
  FaBuilding,
} from "react-icons/fa";

function JobDetails() {
  const { id } = useParams();

  const [job, setJob] = useState(null);

  const { user } = useAuth();

const { t } = useTranslation();

const [isModalOpen, setIsModalOpen] =
  useState(false);

const isMyJob =
  user &&
  job &&
  job.user_id === user.id;

const handleApply = async (
  response
) => {
  if (!user) {
    alert(
      t("common.error")
    );
    return;
  }

  const { error } =
    await supabase
      .from("responses")
      .insert([
        {
          user_id: user.id,

          job_id: job.id,

          job_title:
            job.title,

          company:
            job.company,

          full_name:
            response.fullName,

          phone:
            response.phone,

          message:
            response.message,
        },
      ]);

  if (error) {
    console.log(error);

    alert(
      t("common.error")
    );

    return;
  }

  alert(
    t("jobs.applied")
  );

  setIsModalOpen(false);
};

  useEffect(() => {
    loadJob();
  }, []);

  async function loadJob() {
    const { data, error } =
      await supabase
        .from("jobs")
        .select("*")
        .eq("id", id)
        .single();

    if (!error) {
      setJob(data);
    }
  }

  if (!job) {
    return (
      <section className={styles.jobDetails}>
        <div className={styles.container}>
          <h1>Загрузка...</h1>
        </div>
      </section>
    );
  }

  return (
    <section className={styles.jobDetails}>
      <div className={styles.container}>
        <BackButton />

        <Breadcrumbs
          items={[
            "Главная",
            "Вакансии",
            job.title,
          ]}
        />

        <div className={styles.content}>
          <div className={styles.left}>
            <div className={styles.topCard}>
              <div>
                <span className={styles.category}>
                  {job.category}
                </span>

                <h1>{job.title}</h1>

                <p className={styles.company}>
                  <FaBuilding />
                  {job.company}
                </p>
              </div>
            </div>

            <div className={styles.infoGrid}>
              <div>
                <FaMoneyBillWave />
                <span>{job.salary}</span>
              </div>

              <div>
                <FaMapMarkerAlt />
                <span>{job.city}</span>
              </div>

              <div>
                <FaClock />
                <span>{job.schedule}</span>
              </div>

              <div>
                <FaBriefcase />
                <span>{job.experience}</span>
              </div>
            </div>

            <div className={styles.block}>
              <h2>Описание вакансии</h2>

              <p>
                {job.description}
              </p>
            </div>

            <div className={styles.block}>
              <h2>Обязанности</h2>

              <p>
                {job.responsibilities}
              </p>
            </div>

            <div className={styles.block}>
              <h2>Требования</h2>

              <p>
                {job.requirements}
              </p>
            </div>
          </div>

          <div className={styles.right}>
            <div className={styles.contactCard}>
              <h3>Контакты</h3>

              {job.phone && (
                <a href={`tel:${job.phone}`}>
                  <FaPhoneAlt />
                  {job.phone}
                </a>
              )}

              {job.whatsapp && (
                <a href={`https://wa.me/${job.whatsapp}`}>
                  <FaWhatsapp />
                  {job.whatsapp}
                </a>
              )}

              {job.telegram && (
                <a href={`https://t.me/${job.telegram}`}>
                  <FaTelegramPlane />
                  {job.telegram}
                </a>
              )}

             <button
  disabled={isMyJob}
  onClick={() =>
    setIsModalOpen(true)
  }
>
  {isMyJob
    ? t("jobs.applied")
    : t("jobs.apply")}
</button>

<ApplyModal
  isOpen={isModalOpen}
  onClose={() =>
    setIsModalOpen(false)
  }
  onSubmit={handleApply}
/>
            </div>

            <div className={styles.companyCard}>
              <h3>О компании</h3>

              <p>
                {job.aboutCompany}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default JobDetails;