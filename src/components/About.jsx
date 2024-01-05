/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/prop-types */
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { services } from "../constants/index";
import { fadeIn, textVariant } from "../utils/motion";
import { Wrapper } from "../HOC";
const SerivceCard = ({ title, icon, index }) => {
  return (
    <Tilt
      className=" 
    h-[280px] sm:w-[250px] w-full  hover:shadow-card transition
    cursor-pointer"
    >
      <motion.div
        variants={fadeIn("right", "spring", 0.5 * index, 0.75)}
        className="w-full h-full green-pink-gradient p-1 rounded-xl"
      >
        <div
          className=" h-full w-full bg-tertiary p-2 rounded-lg flex 
        flex-col gap-6 items-center justify-center"
        >
          <img src={icon} alt={title} className="w-[80px]" />
          <p className="text-xl font-bold text-center">{title}</p>
        </div>
      </motion.div>
    </Tilt>
  );
};
const About = () => {
  return (
    <section>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>
      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-secondary text-[17px] max-w-3xl
         leading-[30px]"
      >
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione
        perferendis quasi distinctio totam aspernatur excepturi cum perspiciatis
        molestias commodi! Nobis odit tempora quos modi fugit enim autem
        laudantium harum iusto. Lorem ipsum dolor sit amet consectetur
        adipisicing elit. Ratione perferendis quasi distinctio totam aspernatur
        excepturi cum perspiciatis molestias commodi! Nobis odit tempora quos
        modi fugit enim autem laudantium harum iusto.
      </motion.p>
      <div className="flex flex-wrap gap-10 justify-center mt-20">
        {services.map((service, index) => (
          <SerivceCard key={service.title} {...service} index={index} />
        ))}
      </div>
    </section>
  );
};

export default Wrapper(About, "about");
