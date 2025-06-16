/** @format */
import emailjs from "emailjs-com";
import { useRef } from "react";
import styles from "./Connect.module.css";

const Connect = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_xwmc5dd", // 👈 emailjs.com da yaratilgan servis ID
        "template_y7lj6kk", // 👈 emailjs.com dagi template ID
        form.current,
        "IarxNWypdKsdJFfKA" // 👈 public key (User ID yoki API key)
      )
      .then(
        (result) => {
          alert("✅ Xabaringiz muvaffaqiyatli yuborildi!");
          form.current.reset();
        },
        (error) => {
          alert("❌ Xatolik yuz berdi: " + error.text);
        }
      );
  };

  return (
    <section id="connect" className={styles.connectSection}>
      <div className={styles.connectContainer}>
        <h2>Connect</h2>
        <form className={styles.connectForm} ref={form} onSubmit={sendEmail}>
          <input type="text" name="name" placeholder="Ismingiz" required />
          <input
            type="email"
            name="email"
            placeholder="Email manzilingiz"
            required
          />
          <input
            type="text"
            name="time"
            value={new Date().toLocaleString("uz-UZ", {
              timeZone: "Asia/Tashkent",
            })}
            hidden
            readOnly
          />
          <textarea
            name="message"
            placeholder="Xabaringizni yozing..."
            rows="5"
            required
          />
          <button type="submit">Yuborish</button>
        </form>
      </div>
    </section>
  );
};

export default Connect;
