import styles from "./JobCard.module.css";
import { Link } from "react-router-dom";
import { useState } from "react";
import ApplyModal from "../ApplyModal/ApplyModal";
import { useAuth } from "../../../hooks/useAuth";
import { supabase } from "../../../lib/supabase";
import {
  addFavorite,
  removeFavorite,
  getFavorites,
} from "../../../utils/favoritesStorage";
import {
  FaMapMarkerAlt,
  FaMoneyBillWave,
  FaClock,
  FaHeart,
  FaBriefcase,
  FaTrash,
} from "react-icons/fa";

function JobCard({
  job,
  showDelete,
  onDelete,
}) {
  const { user } = useAuth();
  const [isModalOpen, setIsModalOpen] =
  useState(false);

const handleApply = async (
  response
) => {
  if (!user) {
    alert("Войдите в аккаунт");
    return;
  }

  const { error } =
    await supabase
      .from("responses")
      .insert([
        {
          user_id: user.id,

          job_id: job.id,

          job_title: job.title,

          company: job.company,

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
    alert("Ошибка");
    return;
  }

  alert(
    "Отклик отправлен!"
  );

  setIsModalOpen(false);
};
  const [favorite, setFavorite] =
  useState(
    getFavorites().some(
      (item) =>
        item.id === job.id
    )
  );

const isMyJob =
  user &&
  job.user_id === user.id;

  const handleFavorite = () => {
  if (favorite) {
    removeFavorite(job.id);

    setFavorite(false);
  } else {
    addFavorite(job);

    setFavorite(true);
  }
};
  return (
    <div className={styles.card}>
      {/* TOP */}
      <div className={styles.top}>
        <div>
          <span className={styles.category}>
            {job.category}
          </span>

          <h2>{job.title}</h2>

          <p className={styles.company}>
            {job.company}
          </p>
        </div>

       <div className={styles.topButtons}>
  <button
    onClick={handleFavorite}
    style={{
      color: favorite
        ? "red"
        : "#9ca3af",
    }}
  >
    <FaHeart />
  </button>

  {showDelete && (
    <button
      onClick={() =>
        onDelete(job.id)
      }
      className={
        styles.deleteBtn
      }
    >
      <FaTrash />
    </button>
  )}
</div>
      </div>

      {/* INFO */}
      <div className={styles.info}>
        <div>
          <FaMoneyBillWave />

          <span>
            {job.salary}
          </span>
        </div>

        <div>
          <FaMapMarkerAlt />

          <span>{job.city}</span>
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
      <p className={styles.description}>
        {job.description}
      </p>

      {/* BUTTONS */}
      <div className={styles.actions}>
        <Link to={`/job-details/${job.id}`}>
          Подробнее
        </Link>

        <button
           disabled={isMyJob}
           onClick={() =>
             setIsModalOpen(true)
           }
         >
           {isMyJob
             ? "Ваша вакансия"
             : "Откликнуться"}
         </button>
        <ApplyModal
           isOpen={isModalOpen}
           onClose={() =>
             setIsModalOpen(false)
           }
           onSubmit={handleApply}
         />
      </div>
    </div>
  );
}

export default JobCard;