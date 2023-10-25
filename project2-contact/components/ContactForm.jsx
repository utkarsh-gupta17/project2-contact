import Button from "./Button/Button";
import styles from "./ContactForm.module.css";
import { MdMessage } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import { HiMail } from "react-icons/hi";
import { useState } from "react";


const ContactForm = () => {

  const [name,setName] = useState("khaali");
  const [email,setEmail] = useState("khaali");
  const [text,setText] = useState("khaali");

  const onSubmit = (event) => {
    event.preventDefault(); // to prevent page from reloading on submitting the form
    // console.log("name",event.target[0].value);
    // console.log("email",event.target[1].value);
    // console.log("text",event.target[2].value);
    setName(event.target[0].value);
    setEmail(event.target[1].value);
    setText(event.target[2].value);
  }
  return (
    <div className={`${styles.container}`}>
      <div className={`${styles.contact_form}`}>
        <div className={`${styles.top_btn}`}>
          <Button
            text="VIA SUPPORT CHAT"
            icon={<MdMessage fontSize="1.5rem" />}
          />
          <Button text="VIA CALL" icon={<FaPhoneAlt fontSize="1.5rem" />} />
        </div>
        <Button
          isOutline={true}
          text="VIA EMAIL FORM"
          icon={<HiMail fontSize="1.5rem" />}
        />
        <form action="" onSubmit={onSubmit}>
          <div className={`${styles.form}`}>
            <label htmlFor="name">Name</label>
            <input type="text" name="name" id="" />
          </div>
          <div className={`${styles.form}`}>
            <label htmlFor="email">E-mail</label>
            <input type="text" name="email" id="" />
          </div>
          <div className={`${styles.form}`}>
            <label htmlFor="para">Text</label>
            <textarea name="para" id="" cols="30" rows="8"></textarea>
          </div>
          <div style={{
            display: "flex",
            justifyContent : "end",
          }}>
            <Button text="Submit" />
          </div>
          <div>
            {name + ", " + email + ", " + text}
          </div>
        </form>
      </div>
      <div className={`${styles.contact_image}`}>
        <img src="/images/main.svg" alt="" />
      </div>
    </div>
  );
};

export default ContactForm;
