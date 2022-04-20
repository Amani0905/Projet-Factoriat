import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
const Contact = () => {
  const [result, setResult] = useState(false);
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_36646nc",
        "template_1af5awo",
        form.current,
        "F48uG7v8XURm_qIp_"
      )
      // commentjljlj
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    setResult(true);
    e.target.reset();
    setTimeout(() => setResult(false), 5000);
  };

  return (
    <div>
      Contact
      <form ref={form} onSubmit={sendEmail}>
        <label>Prénom</label>
        <input type="text" name="name" />
        <label>Email</label>
        <input type="email" name="email" />
        <label>Sujet</label>
        <input type="text" name="subject" />
        <label>Message</label>
        <textarea name="message" />
        <input type="submit" value="Send" />
        {result ? <h1>msg envoyé</h1> : null}
      </form>
    </div>
  );
};

export default Contact;
