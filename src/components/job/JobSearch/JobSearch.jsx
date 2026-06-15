import { useState } from "react";
import styles from "./JobSearch.module.css";
import { FaSearch, FaMicrophone, FaTimes, } from "react-icons/fa";

function JobSearch({ search, setSearch, setShowFilter }) {
  const [listening, setListening] = useState(false);

  const startVoiceSearch = () => {
    const SpeechRecognition =
      window.SpeechRecognition || window.webkitSpeechRecognition;

    if (!SpeechRecognition) {
      alert("Браузер не поддерживает голосовой поиск");
      return;
    }

    const recognition = new SpeechRecognition();
    recognition.lang = "ru-RU";
    recognition.start();
    setListening(true);

    recognition.onresult = (event) => {
      const text = event.results[0][0].transcript;
      setSearch(text);
      setListening(false);
    };

    recognition.onerror = () => {
      setListening(false);
    };

    recognition.onend = () => {
      setListening(false);
    };
  };

  return (
    <div className={styles.search}>
      <div className={styles.inputBox}>
        <FaSearch className={styles.icon} />

        <input
          type="text"
          placeholder="Поиск вакансий..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        {search && (
  <button
    type="button"
    className={styles.clearBtn}
    onClick={() =>
      setSearch("")
    }
  >
    <FaTimes />
  </button>
)}

        <button
          type="button"
          className={styles.voiceBtn}
          onClick={startVoiceSearch}
          style={{ backgroundColor: listening ? "#ef4444" : "#2563eb" }} 
          title="Голосовой поиск"
        >
          <FaMicrophone />
        </button>
      </div>

      {/* Кнопка для ПК */}
      <button type="button" className={styles.searchBtn}>
        Поиск
      </button>

      {/* Кнопка для телефона */}
      <button
        type="button"
        className={styles.filterBtn}
        onClick={() => setShowFilter(true)}
      >
        Фильтр
      </button>
    </div>
  );
}

export default JobSearch;