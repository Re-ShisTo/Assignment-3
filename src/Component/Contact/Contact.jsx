import React from "react";
import "./Contact.css";
import { useState } from "react";

const Contact = () => {
  const [animate, setAnimate] = useState(false);

  const handleClick = () => {
    setAnimate(true);

    setTimeout(() => {
      setAnimate(false);
    }, 1000);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);

    const data = {
      name: formData.get("Name"),
      email: formData.get("Email"),
      number: formData.get("Number"),
      message: formData.get("Message"),
    };
    console.log("Form Data:", data);
    e.target.reset();
  };
  return (
    <div className="contact">
      <h1>SEND ME A MESSAGE</h1>
      <p>
        I'm here to help! Whether you have a question, need a quote, or just
        want to chat about your next project, I'd love to hear from you.
      </p>
      <form action="" onSubmit={handleSubmit}>
        <input
          type="text"
          name="Name"
          autoComplete="off"
          placeholder="ENTER YOUR NAME"
        />
        <input
          type="email"
          name="Email"
          autoComplete="off"
          placeholder="ENTER YOUR EMAIL"
        />
        <input
          type="number"
          name="Number"
          autoComplete="off"
          placeholder="PHONE NUMBER"
        />
        <textarea name="Message" placeholder="YOUR MESSAGE"></textarea>
        <button type="submit" onClick={handleClick}>
          <span>SEND</span>{" "}
          <i
            className={`fa-solid fa-paper-plane ${animate ? "animate" : ""}`}
          ></i>
        </button>
      </form>
    </div>
  );
};

export default Contact;
