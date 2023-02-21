import React, { useRef, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import emailjs from "@emailjs/browser";
import styles from "./Contacto.module.css";

const Contacto = () => {
  const SERVICE_ID = "service_oaksvac";
  const TEMPLATE_ID = "template_trfjcil";
  const PUBLIC_KEY = "O7jgSb2G6PiunQMKB";
  const [result, setResult] = useState(false);
  const navigateTo = useNavigate();
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(SERVICE_ID,TEMPLATE_ID, form.current,PUBLIC_KEY).then(
      (result) => {
        console.log(result.text);
      },
      (error) => {
        console.log(error.text);
      }
    );
    alert("mensaje enviado");
    e.target.reset();
  };

  return (
    <div className={styles.divCont}>
      <div className={styles.divBtn}>
        <Link to="/">
          <button className={styles.homeBtn}>Volver al Home</button>
        </Link>
      </div>
      <h1>Contacto</h1>
      <div className={styles.divForm}>
        <form ref={form} onSubmit={sendEmail} className={styles.form}>
          <label>Nombre</label>
          <input
            type="text"
            name="user_name"
            className={styles.input}
            placeholder="Ingrese su nombre"
            required
          />
          <label>Email</label>
          <input
            type="email"
            name="user_email"
            className={styles.input}
            placeholder="Ingrese su email"
            required
          />
          <label>Tu mensaje</label>
          <textarea name="message" className={styles.message} placeholder="Ingrese su mensaje" required />
          <button type="submit" className={styles.btn}>
            Enviar
          </button>
          <div>
            {result ? <p>el mensaje ha sido enviado con exito</p> : null}
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contacto;
