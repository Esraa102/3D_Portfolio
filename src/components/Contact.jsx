/* eslint-disable react-refresh/only-export-components */
import { motion } from "framer-motion";
import { Wrapper } from "../HOC";
import { styles } from "../styles";
import CanvasPlanet from "./canvas/Earth";
import { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import { slideIn } from "../utils/motion";

const Contact = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);
  setInterval(() => {
    if (success) setSuccess(false);
    if (error) setError(false);
  }, 5000);
  const formRef = useRef(null);
  const [loading, setLoading] = useState(false);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    emailjs
      .send(
        "service_414ly0c",
        "template_xle7oy8",
        {
          from_name: form.name,
          to_name: "Esraa",
          from_email: form.email,
          to_email: "manalellban9@gmail.com",
          message: form.message,
        },
        "oHUpNWYScYWUE3eGP"
      )
      .then(
        () => {
          setLoading(false);

          setForm({
            name: "",
            email: "",
            message: "",
          });
          setSuccess(true);
        },
        (error) => {
          setLoading(true);

          console.log(error);
          setError(true);
        }
      );
  };
  return (
    <section
      className="flex lg:flex-row gap-10  flex-col-reverse
    overflow-hidden justify-between "
    >
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className="bg-black-100 p-8 rounded-xl flex-1  md:flex-[0.75]"
      >
        <div>
          <p className={styles.sectionSubText}>Get In Touch</p>
          <h2 className={styles.sectionHeadText}>Contact.</h2>
        </div>
        <form
          action=""
          ref={formRef}
          onSubmit={handleSubmit}
          className="flex flex-col gap-4 mt-20"
        >
          <label htmlFor="name">Your Name</label>
          <input
            id="name"
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
            placeholder="Enter Your Name"
            required
            className="w-full px-2 py-3 text-white bg-tertiary rounded-md 
              focus:outline-none focus:border-2 focus:border-white "
          />
          <label htmlFor="email">Your Email</label>
          <input
            id="email"
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            placeholder="Enter Your Email"
            required
            className="w-full px-2 py-3 text-white bg-tertiary rounded-md 
              focus:outline-none focus:border-2 focus:border-white "
          />

          <label htmlFor="mess">Your Message</label>
          <textarea
            id="mess"
            name="message"
            value={form.message}
            onChange={handleChange}
            placeholder="Wirte Your Message"
            className="w-full px-2 py-3 text-white bg-tertiary rounded-md 
           focus:outline-none focus:border-2 focus:border-white"
            required
            rows={10}
          ></textarea>
          <button
            type="submit"
            className="w-fit px-8 py-3 bg-tertiary
              text-lg  shadow-lg shadow-primary text-white
              font-bold rounded-md"
          >
            {loading ? "Sending..." : "Send"}
          </button>
          {error && (
            <span className="text-red-700">
              Something Went Wrong,Please Try Again
            </span>
          )}
          {success && (
            <span className="text-green-500">
              Thank You, Your Message Was Sent Successfully
            </span>
          )}
        </form>
      </motion.div>
      <motion.div
        variants={slideIn("right", "tween", 0.2, 1)}
        className="flex-1 lg:h-auto md:h-[500px] h-[350px]"
      >
        <CanvasPlanet />
      </motion.div>
    </section>
  );
};

export default Wrapper(Contact, "contact");
