import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "../../lib/supabase";
import { useAuth } from "../../hooks/useAuth";
import styles from "./AddJob.module.css";
import Breadcrumbs from "../../components/ui/Breadcrumbs/Breadcrumbs";
import BackButton from "../../components/ui/BackButton/BackButton";
import { createJob } from "../../services/jobService";

function AddJob() {
  const navigate = useNavigate();
const { user } = useAuth();
  const categoryOptions = {

    "Отели, кафе, рестораны": [
       "Шеф-повар",
        "Су-шеф",
        "Повар-универсал",
        "Повар холодного/горячего цеха",
        "Кондитер / Пекарь",
        "Пиццамейкер / Сушист",
        "Бариста / Бармен",
        "Официант",
        "Хостес",
        "Администратор зала",
        "Посудомойщик / Техперсонал",
        "Помощник повара",
        "Менеджер по банкетному обслуживанию"
    ],
    
    "Продажи, работа с клиентами": [
       "Менеджер по продажам (B2B/B2C)",
        "Продавец-консультант",
        "Кассир",
        "Торговый представитель",
        "Региональный менеджер",
        "Мерчендайзер",
        "Телемаркетолог (продажи по телефону)",
        "Специалист по работе с маркетплейсами",
        "Менеджер по работе с ключевыми клиентами (KAM)",
        "Супервайзер торговой команды",
        "Консультант в интернет-магазин"
    ],

    "Такси, логистика, доставка": [
        "Водитель такси",
        "Водитель-курьер",
        "Пеший курьер / Велокурьер",
        "Водитель международник (Дальнобойщик)",
        "Логист по внутренним перевозкам",
        "Менеджер ВЭД (Китай, Турция, Европа)",
        "Диспетчер службы такси/доставки",
        "Экспедитор",
        "Специалист по таможенному оформлению",
        "Водитель спецтехники",
        "Координатор логистических потоков"
    ],

    "Строительные специальности": [
       "Прораб / Бригадир",
        "Каменщик / Кирпичник",
        "Электрик",
        "Сантехник / Сварщик",
        "Плиточник",
        " Маляр-штукатур",
        "Гипсокартонщик",
        "Арматурщик / Бетонщик",
        "Кровельщик",
        "Инженер-проектировщик",
        "Разнорабочий",
        "Специалист по фасадным работам"
    ],

    "Швейное дело": [
      "Швея (массovка)",
        "Швея (индивидуальный пошив)",
        "Технолог швейного цеха",
        "Конструктор лекал",
        "Закройщик",
        "Утюжильщик",
        "Мастер швейного цеха",
        "Контролер качества (ОТК)",
        "Механик швейного оборудования",
        "Помощник швеи",
        "Дизайнер одежды",
        "Настильщик"
    ],

    "Производство": [
       "Начальник производства",
        "Оператор производственной линии",
        "Инженер-механик",
        "Технолог пищевого производства",
        "Слесарь-сборщик",
        "Токарь / Фрезеровщик",
        "Мастер смены",
        "Контролер ОТК",
        "Кладовщик на производстве",
        "Упаковщик готовой продукции",
        "Технолог мебельного производства"
    ],

    "Домашний персонал и уборка": [
        "Няня (дневная/с проживанием)",
        "Домработница",
        "Сиделка (уход за пожилыми)",
        "Клинер (специалист по уборке)",
        "Повар в семью",
        "Гувернантка",
        "Садовник",
        "Хозяйственный помощник",
        "Водитель в семью",
        "Мойщик окон",
        "Мастер на час (муж на час)"
      ],
    
    "Склад": [
        "Заведующий складом",
        "Кладовщик",
        "Комплектовщик / Сборщик заказов",
        "Грузчик",
        "Оператор 1С (Склад)",
        "Приемщик товара",
        "Водитель погрузчика (карщик)",
        "Маркировщик / Стикеровщик",
        "Упаковщик",
        "Ревизор / Инспектор склада",
        "Сортировщик"
      ],

    "СТО, автобизнес": [
        "Автомеханик (ходовик)",
        "Автоэлектрик",
        "Моторист",
        "Автомаляр / Костоправ",
        "Мастер по ремонту КПП",
        "Диагност",
        "Шиномонтажник",
        "Автомойщик / Детейлер",
        "Менеджер по продаже автозапчастей",
        "Мастер-приемщик",
        "Специалист по выкупу авто",
        "Тонировщик"
      ],
    

    
      
    "Салоны красоты": [
       "Парикмахер-стилист",
        "Мастер маникюра / педикюра",
        "Лешмейкер (ресницы) / Бровист",
        "Косметолог-эстетист",
        "Визажист",
        "Барбер",
        "Мастер по депиляции (шугаринг)",
        "Массажист",
        "Тату-мастер",
        "Администратор салона",
        "Мастер по наращиванию волос"
      ],

    "Административный персонал": [
        "Офис-менеджер",
        "Ресепшн / Секретарь",
        "HR-менеджер / Рекрутер",
        "Помощник руководителя",
        "Оператор Call-центра",
        "Специалист по кадрам (КДP)",
        "Переводчик",
        "Делопроизводитель",
        "Архивариус",
        "Завхоз",
        "Менеджер по закупкам в офис"
      ],
    

    
      
    "Охрана, безопасность": [
        "Охранник (объектовый)",
        "Личный охранник (телохранитель)",
        "Начальник службы безопасности",
        "Специалист видеонаблюдения",
        "Инкассатор",
        "Инженер по пожарной безопасности",
        "Контролер КПП",
        "Сторож (ночной)",
        "Специалист по установке сигнализаций",
        "Вахтер",
        "ГБР (группа быстрого реагирования)"
      ],

    "Сфера образования": [
        "Учитель начальных классов",
        "Преподаватель иностранных языков",
        "Воспитатель",
        "Репетитор (ОРТ, школьные предметы)",
        "Методист",
        "Преподаватель IT / Дизайна",
        "Тренер / Инструктор по спорту",
        "Психолог (педагог)",
        "Логопед",
        "Инструктор по вождению",
        "Профориентолог"
      ],
   
    "Медицина, фармацевтика": [
       "Врач (терапевт, стоматолог и др.)",
        "Медицинская сестра / Брат",
        "Фармацевт / Провизор в аптеку",
        "Лаборант",
        "Акушер-гинеколог",
        "Педиатр",
        "Косметолог (с мед. образованием)",
        "Массажист (лечебный)",
        "Фельдшер",
        "Администратор клиники",
        "Санитар"
      ],

    "Сельское хозяйство": [
        "Агроном",
        "Ветеринар",
        "Зоотехник",
        "Тракторист / Комбайнер",
        "Рабочий на ферму / Постух",
        "Специалист по теплицам",
        "Пчеловoд",
        "Ирригатор",
        "Технолог по переработке сельхозпродукции",
        "Механизатор",
        "Садовod"
      ],

    "Сетевой маркетинг": [
        "Консультант по продукции",
        "Менеджер по развитию сети",
        "Дистрибьютор",
        "Лидер группы (Team Leader)",
        "Специалист по прямым продажам",
        "Обучающий тренер по продукту",
        "Координатор структуры",
        "Организатор промо-акций",
        "Консультант по красоте/здоровью",
        "Менеджер по рекрутингу в сеть"
      ],

    "IT, компьютеры, связь": [
        "Frontend разработчик",
        "Backend разработчик",
        "Мобильный разработчик",
        "Тестировщик (QA)",
        "Системный администратор",
        "UX/UI Дизайнер",
        "Project менеджер",
        "Специалист техподдержки",
        "Инженер связи / Монтажник сетей",
        "Data Scientist",
        "DevOps инженер"
      ],

    "Маркетинг, реклама, PR": [
        "SMM-специалист",
        "Таргетолог / Контекстолог",
        "PR-менеджер",
        "Копирайтер",
        "Графический дизайнер",
        "Маркетолог-аналитик",
        "Event-менеджер",
        "Видеомонтажer / Motion дизайнер",
        "SEO-специалист",
        "BTL-менеджer",
        "Креативный директор"
      ],

    "Развлечения, спорт": [
        "Фитнес-тренер",
        "Аниматор",
        "Инструктор по йоге / танцам",
        "Звукооператор / Диджей",
        "Организатор мероприятий",
        "Ведущий (Тамада)",
        "Фотограф / Видеограф",
        "Инструктор в бассейн",
        "Гид в горы / Альпинист",
        "Спортивный администратор",
        "Промоутер"
      ],

    "Недвижимость": [
        "Риелтор (вторичное жилье)",
        "Агент по новостройкам",
        "Специалист по коммерческой недвижимости",
        "Менеджер по аренде",
        "Оценщик недвижимости",
        "Юрист по земельным вопросам",
        "Брокер",
        "Управляющий жилым комплексом",
        "Консультант по ипотеке",
        "Фотограф для объявлений (интерьерный)",
        "Сюрвейер"
      ],
    "Другие специальности": [
        "Юрист / Адвокат",
        "Нотариус",
        "Эколог",
        "Метеоролог",
        "Ювелир",
        "Часовщик",
        "Дизайнер интерьера",
        "Переводчик (синхронист)",
        "Специалист по тендерам",
        "Страховой агент",
        " Социолог"
      ],

      "Работа за границей":[
       "Сезонный рабочий (сбор ягод/овощей)",
        "Рабочий на завод / склад (Европа)",
        "Водитель дальнобойщик (международник)",
        "Строитель (для зарубежных проектов)",
        "Персонал в отели (Турция, ОАЭ)",
        "Медперсонал (Германия)",
        "Няня / Au-Pair",
        "Горничная (Европа/Азия)",
        "Повар (контрактная работа)",
        "Специалист по уходу (Польша, Италия)",
        "Электрик / Монтажник (за рубеж)"
      ],
    
      "Бухгалтерия и аудит":[
       "Главный бухгалтер",
        "Бухгалтер (участок ЗП)",
        "Бухгалтер (участок ТMЦ)",
        "Финансовый директор",
        "Кассир-бухгалтер",
        "Налоговый консультант",
        "Аудитор",
        "Экономист",
        "Специалист по 1С",
        "Помощник бухгалтера",
        "Аналитик финансовой отчетности"
      ],
    
     "Юриспруденция":[
       "Юрисконсульт",
        "Адвокат",
        "Нотариус / Помощник нотариуса",
        "Корпоративный юрист",
        "Специалист по защите прав потребителей",
        "Судебный исполнитель",
        "Юрист по кадровым вопросам",
        "Специалист по интеллектуальной собственности",
        "Коллектор / Специалист по взысканию",
        "Медиатор",
        "Юрист-регистратор"
      ],

     "Культура и Искусство":[
       "Музыкант / Певец",
        "Художник / Иллюстратор",
        "Артист театра и кино",
        "Режиссер монтажа",
        "Дизайнер декораций",
        "Искусствовед",
        "Реставратор",
        "Библиотекарь",
        "Куратор выставок",
        "Хореограф",
        "Музейный работник"
      ],
     
    "Государственная и муниципальная служба": [
       "Ведущий специалист в мэрию",
        "Сотрудник налоговой службы",
        "Инспектор соцзащиты",
        "Делопроизводитель в гос. орган",
        "Специалист архивного отдела",
        "Пресс-секретарь министерства",
        "Инженер в архитектуру/градостроительство",
        "Эколог-инспектор",
        "Специалист по молодежной политике",
        "Статистик",
        "Специалист по работе с обращениями граждан"
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

 const handleSubmit = async (e) => {
  e.preventDefault();

  if (!user) {
    alert("Войдите в аккаунт");
    return;
  }

  const { error } =
    await supabase.from("jobs").insert([
      {
        user_id: user.id,

        title: formData.title,

        company: formData.company,

        city: formData.city,

        salary: `${formData.salaryFrom} - ${formData.salaryTo}`,

        category: formData.category,

        specialization:
          formData.specialization,

        schedule:
          formData.schedule,

        experience:
          formData.experience,

        description:
          formData.description,

        responsibilities:
          formData.responsibilities,

        requirements:
          formData.requirements,

        phone:
          formData.phone,

        whatsapp:
          formData.whatsapp,

        telegram:
          formData.telegram,

        about_company:
          formData.aboutCompany,
      },
    ]);

  if (error) {
    console.log(error);

    alert("Ошибка при публикации");

    return;
  }

  alert("Вакансия опубликована");

  navigate("/my-jobs");
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
                placeholder="20000"
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
                placeholder="150000"
              />
            </div>
          </div>

          <div className={styles.group}>
            <label>Город</label>

            <select
              name="city"
              value={formData.city}
              onChange={
                handleChange
              }
            >
              <option>Все города</option>
          <option>Бишкек</option>
          <option>Токмок</option>
          <option>Кант</option>
          <option>Кара-Балта</option>
          <option>Шопоков</option>
          <option>Орловка</option>
          <option>Кемин</option>
          <option>Каракол</option>
          <option>Балыкчы</option>
          <option>Чолпон-Ата</option>
          <option>Джалал-Абад</option>
          <option>Таш-Кумыр</option>
          <option>Майлуу-Суу</option>
          <option>Кара-Куль</option>
          <option>Кочкор-Ата</option>
          <option>Кербен</option>
          <option>Ноокат</option>
          <option>Базар-Коргон</option>
          <option>Узген</option>
          <option>Кара-Суу</option>
          <option>Баткен</option>
          <option>Кызыл-Кия</option>
          <option>Сулюкта</option>
          <option>Кадамжай</option>
          <option>Исфан</option>
          <option>Айдаркен</option>
          <option>Нарын</option>
          <option>Талас</option>
          <option>Ош</option>
            </select>
          </div>

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
                <option>Любой</option>
                <option>Полный день</option>
                <option>Сменный график</option>
                <option>Гибкий график</option>
                <option>Удаленная работа</option>
                <option>Гибридный формат</option>
                <option>Вахтовый метод</option>
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
              <option>Любой</option>
              <option>Без опыта</option>
              <option>1-3 года</option>
              <option>3-5 лет</option>
              <option>Более 5 лет</option>
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