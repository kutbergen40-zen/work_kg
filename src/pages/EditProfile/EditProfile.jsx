import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth, } from "../../hooks/useAuth";
import { supabase } from "../../lib/supabase";
import styles from "./EditProfile.module.css";

function EditProfile() {
  const {
  user,
  refreshUser,
} = useAuth();

  const navigate = useNavigate();

  const [name, setName] = useState(
    user?.user_metadata?.name || ""
  );

  const [phone, setPhone] = useState(
    user?.user_metadata?.phone || ""
  );

  const [city, setCity] = useState(
    user?.user_metadata?.city || ""
  );

  const [telegram, setTelegram] =
    useState(
      user?.user_metadata
        ?.telegram || ""
    );

  const [profession, setProfession] =
    useState(
      user?.user_metadata
        ?.profession || ""
    );

  const [about, setAbout] =
    useState(
      user?.user_metadata
        ?.about || ""
    );

  const [skills, setSkills] =
    useState(
      user?.user_metadata
        ?.skills || ""
    );

  const handleSave = async (e) => {
    e.preventDefault();

    const { error } =
      await supabase.auth.updateUser({
        data: {
          name,
          phone,
          city,
          telegram,
          profession,
          about,
          skills,
        },
      });

    if (error) {
      alert(error.message);
      return;
    }

   await refreshUser();

alert(
  "Профиль успешно сохранен"
);

navigate("/profile");
  };

  return (
    <section className={styles.edit}>
      <div className={styles.container}>
        <h1>
          Редактировать профиль
        </h1>

        <form
          className={styles.form}
          onSubmit={handleSave}
        >
          <input
            type="text"
            placeholder="Имя"
            value={name}
            onChange={(e) =>
              setName(
                e.target.value
              )
            }
          />

          <input
            type="text"
            placeholder="Телефон"
            value={phone}
            onChange={(e) =>
              setPhone(
                e.target.value
              )
            }
          />

          <input
            type="text"
            placeholder="Город"
            value={city}
            onChange={(e) =>
              setCity(
                e.target.value
              )
            }
          />

          <input
            type="text"
            placeholder="Telegram"
            value={telegram}
            onChange={(e) =>
              setTelegram(
                e.target.value
              )
            }
          />

          <input
            type="text"
            placeholder="Профессия"
            value={profession}
            onChange={(e) =>
              setProfession(
                e.target.value
              )
            }
          />

          <textarea
            placeholder="О себе"
            value={about}
            onChange={(e) =>
              setAbout(
                e.target.value
              )
            }
          />

          <textarea
            placeholder="Навыки (через запятую)"
            value={skills}
            onChange={(e) =>
              setSkills(
                e.target.value
              )
            }
          />

          <button type="submit">
            Сохранить
          </button>
        </form>
      </div>
    </section>
  );
}

export default EditProfile;