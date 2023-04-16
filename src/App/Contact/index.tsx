import React, { useState } from "react";
import { send } from "emailjs-com";
import "./index.css";

function Contact() {
  const [toSend, setToSend] = useState({
    from_name: "",
    to_name: "",
    message: "",
    reply_to: "",
  });

  function onSubmit(event: { preventDefault: () => void }) {
    event.preventDefault();
    send("service_ibz9yeq", "template_73a55v2", toSend, "ICaToGUPXzgTqzH3K")
      .then((response: { status: any; text: any }) => {
        alert("Thanks for getting in contact! I'll get back to you as soon as I can");
      })
      .catch((err: any) => {
        alert("FAILED..."+ err);
      });
      setToSend({ from_name: "",
      to_name: "",
      message: "",
      reply_to: "",});
  }

  function handleChange(event: { target: { name: string; value: string } }) {
    setToSend({ ...toSend, [event.target.name]: event.target.value });
  }

  return (
    <div className="contact-container" id="contact">
      <h1>Contact</h1>
      <form className="contact-form" onSubmit={onSubmit}>
        <input
          className="input-field"
          type="text"
          name="from_name"
          placeholder="Name"
          value={toSend.from_name}
          onChange={handleChange}
        />
        <input
          className="input-field"
          type="text"
          name="reply_to"
          placeholder="Email"
          value={toSend.reply_to}
          onChange={handleChange}
        />
        <textarea
          className="input-field"
          rows={9}
          name="message"
          placeholder="Message"
          value={toSend.message}
          onChange={handleChange}
        />
        <button id="submit-button" type="submit">
          Send
        </button>
      </form>
    </div>
  );
}

export default Contact;
