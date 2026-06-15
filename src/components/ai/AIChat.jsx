import {
  useState,
  useEffect,
  useRef,
} from "react";

import styles from "./AIChat.module.css";

import {
  FaRobot,
  FaTimes,
  FaPaperPlane,
  FaVolumeUp,
} from "react-icons/fa";

import { askAI } from "../../services/aiService";

function AIChat() {
  const [open, setOpen] =
    useState(false);

  const [message, setMessage] =
    useState("");

  const [loading, setLoading] =
    useState(false);

  const [messages, setMessages] =
    useState(() => {
      const saved =
        localStorage.getItem(
          "ai_messages"
        );

      return saved
        ? JSON.parse(saved)
        : [
            {
              sender: "bot",
              text: "Салам! Мен WorkKG AI жардамчымын. Сизге кантип жардам бере алам?",
            },
          ];
    });

  const messagesEndRef =
    useRef(null);

  useEffect(() => {
    localStorage.setItem(
      "ai_messages",
      JSON.stringify(messages)
    );
  }, [messages]);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView(
      {
        behavior: "smooth",
      }
    );
  }, [messages, loading]);

 const speakText = (text) => {
  window.speechSynthesis.cancel();

  const speech =
    new SpeechSynthesisUtterance(
      text
    );

  const voices =
    window.speechSynthesis.getVoices();

  const maleVoice =
    voices.find(
      (voice) =>
        voice.name.includes(
          "Pavel"
        ) ||
        voice.name.includes(
          "Dmitry"
        ) ||
        voice.name.includes(
          "Alexander"
        ) ||
        voice.name.includes(
          "David"
        ) ||
        voice.name.includes(
          "Alex"
        ) ||
        voice.name.includes(
          "Google Русский"
        )
    );

  if (maleVoice) {
    speech.voice =
      maleVoice;
  }

  speech.lang = "ru-RU";

  speech.rate = 0.95;

  speech.pitch = 0.8;

  window.speechSynthesis.speak(
    speech
  );
};

  const sendMessage =
    async () => {
      if (!message.trim())
        return;

      const userMessage =
        message;

      setMessages((prev) => [
        ...prev,
        {
          sender: "user",
          text: userMessage,
        },
      ]);

      setMessage("");

      setLoading(true);

      const aiResponse =
        await askAI(
          userMessage
        );

      setLoading(false);

      setMessages((prev) => [
        ...prev,
        {
          sender: "bot",
          text: aiResponse,
        },
      ]);
    };

  return (
    <>
      <button
        className={
          styles.chatButton
        }
        onClick={() =>
          setOpen(!open)
        }
      >
        {open ? (
          <FaTimes />
        ) : (
          <FaRobot />
        )}
      </button>

      {open && (
        <div
          className={
            styles.chatWindow
          }
        >
          <div
            className={
              styles.header
            }
          >
            <FaRobot />

            <span>
              WorkKG AI
            </span>
          </div>

          <div
            className={
              styles.messages
            }
          >
            {messages.map(
              (
                item,
                index
              ) => (
                <div
                  key={index}
                  className={
                    item.sender ===
                    "bot"
                      ? styles.botMessage
                      : styles.userMessage
                  }
                >
                  <span>
                    {item.text}
                  </span>

                  {item.sender ===
                    "bot" && (
                    <button
                      className={
                        styles.speakBtn
                      }
                      onClick={() =>
                        speakText(
                          item.text
                        )
                      }
                    >
                      <FaVolumeUp />
                    </button>
                  )}
                </div>
              )
            )}

            {loading && (
              <div
                className={
                  styles.botMessage
                }
              >
                WorkKG AI
                жазып жатат...
              </div>
            )}

            <div
              ref={
                messagesEndRef
              }
            ></div>
          </div>

          <div
            className={
              styles.inputBox
            }
          >
            <input
              type="text"
              placeholder="Сообщение..."
              value={message}
              onChange={(
                e
              ) =>
                setMessage(
                  e.target
                    .value
                )
              }
              onKeyDown={(
                e
              ) => {
                if (
                  e.key ===
                  "Enter"
                ) {
                  sendMessage();
                }
              }}
            />

            <button
              onClick={
                sendMessage
              }
            >
              <FaPaperPlane />
            </button>
          </div>
        </div>
      )}
    </>
  );
}

export default AIChat;