import styles from "./ApplyModal.module.css";

function ApplyModal({
  isOpen,
  onClose,
  onSubmit,
}) {
  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();

    const response = {
      name: e.target.name.value,
      phone: e.target.phone.value,
      message:
        e.target.message.value,
    };

    onSubmit(response);
  };

  return (
    <div className={styles.overlay}>
      <div className={styles.modal}>
        <h2>Отклик на вакансию</h2>

        <form onSubmit={handleSubmit}>
          <input
            name="name"
            placeholder="Ваше имя"
            required
          />

          <input
            name="phone"
            placeholder="Телефон"
            required
          />

          <textarea
            name="message"
            placeholder="Сообщение работодателю"
            rows="5"
          />

          <div className={styles.actions}>
            <button type="submit">
              Отправить
            </button>

            <button
              type="button"
              onClick={onClose}
            >
              Закрыть
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default ApplyModal;