import { useTranslation } from "react-i18next";
import styles from "./ApplyModal.module.css";

function ApplyModal({
  isOpen,
  onClose,
  onSubmit,
}) {
  const { t } = useTranslation();

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();

    const response = {
      fullName: e.target.fullName.value,
      phone: e.target.phone.value,
      message:
        e.target.message.value,
    };

    onSubmit(response);
  };

  return (
    <div className={styles.overlay}>
      <div className={styles.modal}>
        <h2>{t("modal.apply")}</h2>

        <form onSubmit={handleSubmit}>
          <input
            name="fullName"
            placeholder={t("modal.fullName")}
            required
          />

          <input
            name="phone"
            placeholder={t("modal.phone")}
            required
          />

          <textarea
            name="message"
            placeholder={t("modal.message")}
            rows="5"
          />

          <div className={styles.actions}>
            <button type="submit">
              {t("modal.submit")}
            </button>

            <button
              type="button"
              onClick={onClose}
            >
              {t("modal.cancel")}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default ApplyModal;