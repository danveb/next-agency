import Image from "next/image";
import styles from "./page.module.css";

// TODO: implement react-toastify for notification once user submits a message
// TODO: implement EmailJS to send emails to admin

export default function Contact() {
  return (
    <main className={styles.container}>
      <div className={styles.img__container}>
        <Image
          src="/contact.png"
          alt="contact image"
          fill
          className={styles.img}
        />
      </div>
      <div className={styles.form__container}>
        <h1 className={styles.form__title}>Say hi? Just drop a message.</h1>
        <form action="" className={styles.form}>
          <input type="text" placeholder="Full name" name="name" />
          <input type="email" placeholder="Email address" name="email" />
          <input type="text" placeholder="Phone" name="phone" />
          <textarea
            name="message"
            cols="30"
            rows="4"
            placeholder="Message"
          ></textarea>
          <button type="submit">Send</button>
        </form>
      </div>
    </main>
  );
}
