import { useState } from "react";
import styles from "./AddJob.module.css";
import Breadcrumbs from "../../components/ui/Breadcrumbs/Breadcrumbs";
import BackButton from "../../components/ui/BackButton/BackButton";

function AddJob() {
  const categoryOptions = {
    "Салоны красоты": [
      "Барбер",
      "Визажист",
      "Мастер маникюра",
      "Косметолог",
    ],

    "Строительные специальности": [
      "Электрик",
      "Сантехник",
      "Прораб",
      "Разнорабочий",
    ],

    "Отели, кафе, рестораны": [
      "Официант",
      "Бариста",
      "Повар",
      "Хостес",
    ],

    "IT, компьютеры, связь": [
      "Frontend разработчик",
      "Backend разработчик",
      "UI/UX дизайнер",
    ],
  };

  const [formData, setFormData] =
    useState({
      title: "",

      company: "",

      salaryFrom: "",

      salaryTo: "",

      city: "Бишкек",

      category: "",

      specialization: "",

      schedule: "Полный день",

      experience: "Без опыта",

      description: "",

      responsibilities: "",

      requirements: "",

      phone: "",

      whatsapp: "",

      telegram: "",

      aboutCompany: "",
    });

  const handleChange = (e) => {
    setFormData({
      ...formData,

      [e.target.name]:
        e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newJob = {
      id: Date.now(),

      title: formData.title,

      company:
        formData.company,

      city: formData.city,

      salary:
        `${formData.salaryFrom} — ${formData.salaryTo} сом`,

      schedule:
        formData.schedule,

      experience:
        formData.experience,

      category:
        formData.category,

      specialization:
        formData.specialization,

      description:
        formData.description,

      responsibilities:
        formData.responsibilities.split(
          ","
        ),

      requirements:
        formData.requirements.split(
          ","
        ),

      phone:
        formData.phone,

      whatsapp:
        formData.whatsapp,

      telegram:
        formData.telegram,

      aboutCompany:
        formData.aboutCompany,
    };

    const oldJobs =
      JSON.parse(
        localStorage.getItem(
          "jobs"
        )
      ) || [];

    const updatedJobs = [
      ...oldJobs,
      newJob,
    ];

    localStorage.setItem(
      "jobs",
      JSON.stringify(updatedJobs)
    );

    alert(
      "Вакансия опубликована!"
    );

    setFormData({
      title: "",
      company: "",
      salaryFrom: "",
      salaryTo: "",
      city: "Бишкек",
      category: "",
      specialization: "",
      schedule: "Полный день",
      experience: "Без опыта",
      description: "",
      responsibilities: "",
      requirements: "",
      phone: "",
      whatsapp: "",
      telegram: "",
      aboutCompany: "",
    });
  };

  return (
    <section className={styles.addJob}>
      <div className={styles.container}>
        <BackButton />
        <Breadcrumbs
  items={[
    "Главная",
    "Добавить вакансию",
  ]}
/>
        <div className={styles.top}>
          <h1>
            Опубликовать вакансию
          </h1>

          <p>
            Найдите сотрудников
            по всему Кыргызстану
          </p>
        </div>

        <form
          className={styles.form}
          onSubmit={handleSubmit}
        >
          {/* TITLE */}
          <div className={styles.group}>
            <label>
              Название вакансии
            </label>

            <input
              type="text"
              name="title"
              value={formData.title}
              onChange={
                handleChange
              }
              placeholder="Барбер"
            />
          </div>

          {/* COMPANY */}
          <div className={styles.group}>
            <label>
              Компания
            </label>

            <input
              type="text"
              name="company"
              value={
                formData.company
              }
              onChange={
                handleChange
              }
              placeholder="Название компании"
            />
          </div>

          {/* SALARY */}
          <div className={styles.row}>
            <div className={styles.group}>
              <label>
                Зарплата от
              </label>

              <input
                type="number"
                name="salaryFrom"
                value={
                  formData.salaryFrom
                }
                onChange={
                  handleChange
                }
                placeholder="30000"
              />
            </div>

            <div className={styles.group}>
              <label>
                Зарплата до
              </label>

              <input
                type="number"
                name="salaryTo"
                value={
                  formData.salaryTo
                }
                onChange={
                  handleChange
                }
                placeholder="100000"
              />
            </div>
          </div>

          {/* CITY */}
          <div className={styles.group}>
            <label>Город</label>

            <select
              name="city"
              value={formData.city}
              onChange={
                handleChange
              }
            >
              <option>
                Бишкек
              </option>

              <option>
                Ош
              </option>

              <option>
                Каракол
              </option>
            </select>
          </div>

          {/* CATEGORY */}
          <div className={styles.row}>
            <div className={styles.group}>
              <label>
                Категория
              </label>

              <select
                name="category"
                value={
                  formData.category
                }
                onChange={(
                  e
                ) => {
                  setFormData({
                    ...formData,

                    category:
                      e.target.value,

                    specialization:
                      "",
                  });
                }}
              >
                <option value="">
                  Выберите категорию
                </option>

                {Object.keys(
                  categoryOptions
                ).map(
                  (category) => (
                    <option
                      key={
                        category
                      }
                      value={
                        category
                      }
                    >
                      {category}
                    </option>
                  )
                )}
              </select>
            </div>

            {/* SPECIALIZATION */}
            <div className={styles.group}>
              <label>
                Специализация
              </label>

              <select
                name="specialization"
                disabled={
                  !formData.category
                }
                value={
                  formData.specialization
                }
                onChange={
                  handleChange
                }
              >
                <option value="">
                  {!formData.category
                    ? "Сначала выберите категорию"
                    : "Выберите специализацию"}
                </option>

                {formData.category &&
                  categoryOptions[
                    formData
                      .category
                  ].map(
                    (job) => (
                      <option
                        key={job}
                        value={
                          job
                        }
                      >
                        {job}
                      </option>
                    )
                  )}
              </select>
            </div>
          </div>

          {/* SCHEDULE */}
          <div className={styles.row}>
            <div className={styles.group}>
              <label>
                График
              </label>

              <select
                name="schedule"
                value={
                  formData.schedule
                }
                onChange={
                  handleChange
                }
              >
                <option>
                  Полный день
                </option>

                <option>
                  Сменный график
                </option>

                <option>
                  Удаленная работа
                </option>
              </select>
            </div>

            <div className={styles.group}>
              <label>
                Опыт работы
              </label>

              <select
                name="experience"
                value={
                  formData.experience
                }
                onChange={
                  handleChange
                }
              >
                <option>
                  Без опыта
                </option>

                <option>
                  1-3 года
                </option>

                <option>
                  3-5 лет
                </option>
              </select>
            </div>
          </div>

          {/* DESCRIPTION */}
          <div className={styles.group}>
            <label>
              Описание
            </label>

            <textarea
              rows="5"
              name="description"
              value={
                formData.description
              }
              onChange={
                handleChange
              }
            />
          </div>

          {/* RESPONSIBILITIES */}
          <div className={styles.group}>
            <label>
              Обязанности
            </label>

            <textarea
              rows="5"
              name="responsibilities"
              value={
                formData.responsibilities
              }
              onChange={
                handleChange
              }
              placeholder="Через запятую"
            />
          </div>

          {/* REQUIREMENTS */}
          <div className={styles.group}>
            <label>
              Требования
            </label>

            <textarea
              rows="5"
              name="requirements"
              value={
                formData.requirements
              }
              onChange={
                handleChange
              }
              placeholder="Через запятую"
            />
          </div>

          {/* CONTACTS */}
          <div className={styles.row}>
            <div className={styles.group}>
              <label>
                Телефон
              </label>

              <input
                type="text"
                name="phone"
                value={
                  formData.phone
                }
                onChange={
                  handleChange
                }
              />
            </div>

            <div className={styles.group}>
              <label>
                WhatsApp
              </label>

              <input
                type="text"
                name="whatsapp"
                value={
                  formData.whatsapp
                }
                onChange={
                  handleChange
                }
              />
            </div>
          </div>

          {/* TELEGRAM */}
          <div className={styles.group}>
            <label>
              Telegram
            </label>

            <input
              type="text"
              name="telegram"
              value={
                formData.telegram
              }
              onChange={
                handleChange
              }
            />
          </div>

          {/* ABOUT */}
          <div className={styles.group}>
            <label>
              О компании
            </label>

            <textarea
              rows="4"
              name="aboutCompany"
              value={
                formData.aboutCompany
              }
              onChange={
                handleChange
              }
            />
          </div>

          <button
            type="submit"
            className={
              styles.submitBtn
            }
          >
            Опубликовать вакансию
          </button>
        </form>
      </div>
    </section>
  );
}

export default AddJob;