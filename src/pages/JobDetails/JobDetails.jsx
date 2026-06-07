import { useState } from "react";
import { useParams } from "react-router-dom";
import jobsData from "../../data/jobsData";
import styles from "./JobDetails.module.css";
import Breadcrumbs from "../../components/ui/Breadcrumbs/Breadcrumbs";
import BackButton from "../../components/ui/BackButton/BackButton";
import {
  addFavorite,
  removeFavorite,
  isFavorite,
} from "../../utils/favorites";
import {
  FaMapMarkerAlt,
  FaMoneyBillWave,
  FaClock,
  FaBriefcase,
  FaHeart,
  FaWhatsapp,
  FaTelegramPlane,
  FaPhoneAlt,
  FaBuilding,
} from "react-icons/fa";

function JobDetails() {
  const { id } = useParams();

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

  const job = allJobs.find(
    (item) =>
      item.id === Number(id)

  );
  const [favorite, setFavorite] =
  useState(
    isFavorite(job?.id)
  );

const toggleFavorite = () => {
  if (favorite) {
    removeFavorite(job.id);
  } else {
    addFavorite(job.id);
  }

  setFavorite(!favorite);
};

  if (!job) {
    return (
      <h1>
        Вакансия не найдена
      </h1>
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
          {/* LEFT */}
          <div className={styles.left}>
            {/* TOP */}
            <div className={styles.topCard}>
              <div>
                <span
                  className={
                    styles.category
                  }
                >
                  {job.category}
                </span>

                <h1>
                  {job.title}
                </h1>

                <p
                  className={
                    styles.company
                  }
                >
                  <FaBuilding />

                  {job.company}
                </p>
              </div>

              <button
                onClick={
                  toggleFavorite
                }
                style={{
                  color: favorite
                    ? "red"
                    : "#999",
                }}
              >
                <FaHeart />
              </button>
            </div>

            {/* INFO */}
            <div
              className={
                styles.infoGrid
              }
            >
              <div>
                <FaMoneyBillWave />

                <span>
                  {job.salary}
                </span>
              </div>

              <div>
                <FaMapMarkerAlt />

                <span>
                  {job.city}
                </span>
              </div>

              <div>
                <FaClock />

                <span>
                  {job.schedule}
                </span>
              </div>

              <div>
                <FaBriefcase />

                <span>
                  {job.experience}
                </span>
              </div>
            </div>

            {/* DESCRIPTION */}
            <div
              className={
                styles.block
              }
            >
              <h2>
                Описание вакансии
              </h2>

              <p>
                {job.description}
              </p>
            </div>

            {/* RESPONSIBILITIES */}
            <div
              className={
                styles.block
              }
            >
              <h2>
                Обязанности
              </h2>

              <ul>
                {job.responsibilities.map(
                  (
                    item,
                    index
                  ) => (
                    <li
                      key={index}
                    >
                      {item}
                    </li>
                  )
                )}
              </ul>
            </div>

            {/* REQUIREMENTS */}
            <div
              className={
                styles.block
              }
            >
              <h2>
                Требования
              </h2>

              <ul>
                {job.requirements.map(
                  (
                    item,
                    index
                  ) => (
                    <li
                      key={index}
                    >
                      {item}
                    </li>
                  )
                )}
              </ul>
            </div>
          </div>

          {/* RIGHT */}
          <div className={styles.right}>
            <div
              className={
                styles.contactCard
              }
            >
              <h3>
                Контакты
              </h3>

              <a href="/">
                <FaPhoneAlt />

                {job.phone}
              </a>

              <a href="/">
                <FaWhatsapp />

                {job.whatsapp}
              </a>

              {job.telegram && (
                <a href="/">
                  <FaTelegramPlane />

                  {job.telegram}
                </a>
              )}

              <button>
                Откликнуться
              </button>
            </div>

            <div
              className={
                styles.companyCard
              }
            >
              <h3>
                О компании
              </h3>

              <p>
                {
                  job.aboutCompany
                }
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default JobDetails;