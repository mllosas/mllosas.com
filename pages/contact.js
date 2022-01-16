import { useForm } from "react-hook-form";
import { useState } from "react";
import { createContext, useContext } from "react";
import styles from "../public/scss/pages/Contact.module.scss";

export default function Contact() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const sendEmail = async (data) => {
    try {
      await fetch("/api/contact", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(data),
      });

      //if sucess do whatever you like, i.e toast notification
      //setTimeout(() => reset(), 2000);
    } catch (error) {
      // toast error message. whatever you wish
    }
  };

  // const [stateFormData, setStateFormData] = useState([]);

  // const sendDataToEmailTemplate = (formData) => {
  //   const confirmationHTML = `<h1>Hey ${formData.name}, This is the confirmationHTML</h1>`;
  //   console.log(formData.name);
  //   console.log(confirmationHTML);
  //   setStateFormData(formData);
  // };

  return (
    <div className={`${styles.contactContent} content`}>
      <p>
        Want to chat about a project or opportunity? <br />
        Feel free to contact me via the form below and I will get back to you.
      </p>
      <form onSubmit={handleSubmit(sendEmail)}>
        <div className="formRow">
          <input
            placeholder="Enter Your Name"
            {...register("name", { required: true })}
          />
          <input
            placeholder="Enter Your Email"
            {...register("email", { required: true, pattern: /^\S+@\S+$/i })}
          />
        </div>
        <div className="formRow">
          <textarea
            placeholder="How can I help?"
            {...register("message", { required: true })}
          />
        </div>
        {errors.email && <span>This field is required</span>}

        <input type="submit" />
      </form>
    </div>
  );
}
