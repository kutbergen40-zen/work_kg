import { useState } from "react";
import styles from "./JobSearch.module.css";
import {
  FaSearch,
  FaMicrophone,
} from "react-icons/fa";

function JobSearch({
  search,
  setSearch,
  setShowFilter,
}) {

    const [listening, setListening] =
  useState(false);

const startVoiceSearch = () => {
  const SpeechRecognition =
    window.SpeechRecognition ||
    window.webkitSpeechRecognition;

  if (!SpeechRecognition) {
    alert(
      "Браузер голосовой поискти колдобойт"
    );
    return;
  }

  const recognition =
    new SpeechRecognition();

  recognition.lang = "ru-RU";

  recognition.start();

  setListening(true);

  recognition.onresult = (
    event
  ) => {
    const text =
      event.results[0][0]
        .transcript;

    setSearch(text);

    setListening(false);
  };

  recognition.onerror =
    () => {
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
          onChange={(e) =>
            setSearch(e.target.value)
          }
        />
          <button
    className={styles.voiceBtn}
    onClick={
      startVoiceSearch
    }
  >
    <FaMicrophone />
  </button>

      </div>

      {/* ноутбук */}
      <button
        className={styles.searchBtn}
      >
        Поиск
      </button>

      {/* телефон */}
      <button
        className={styles.filterBtn}
        onClick={() =>
          setShowFilter(true)
        }
      >
        Фильтр
      </button>
    </div>
  );
}

export default JobSearch;