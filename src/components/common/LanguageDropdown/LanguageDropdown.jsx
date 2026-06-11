import { useState, useRef, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { FaChevronDown } from "react-icons/fa";
import styles from "./LanguageDropdown.module.css";

function LanguageDropdown() {
  const { t, i18n } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  const languages = [
    { code: "ru", label: t("language.ru") },
    { code: "ky", label: t("language.ky") },
    { code: "en", label: t("language.en") },
  ];

  const currentLang = languages.find(
    (lang) => lang.code === i18n.language
  );

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener(
      "mousedown",
      handleClickOutside
    );
    return () => {
      document.removeEventListener(
        "mousedown",
        handleClickOutside
      );
    };
  }, []);

  const handleLanguageChange = (code) => {
    i18n.changeLanguage(code);
    setIsOpen(false);
  };

  return (
    <div
      className={styles.dropdown}
      ref={dropdownRef}
    >
      <button
        className={styles.trigger}
        onClick={() =>
          setIsOpen(!isOpen)
        }
      >
        <span>{currentLang?.label}</span>
        <FaChevronDown
          className={`${styles.icon} ${
            isOpen ? styles.open : ""
          }`}
        />
      </button>

      {isOpen && (
        <div className={styles.menu}>
          {languages.map((lang) => (
            <button
              key={lang.code}
              className={`${styles.item} ${
                i18n.language === lang.code
                  ? styles.active
                  : ""
              }`}
              onClick={() =>
                handleLanguageChange(lang.code)
              }
            >
              {lang.label}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

export default LanguageDropdown;
