/* eslint-disable react/prop-types */
/* eslint-disable react-refresh/only-export-components */
import { Wrapper } from "../HOC";
import { motion } from "framer-motion";
import { Tilt } from "react-tilt";
import { styles } from "../styles";
import { textVariant, fadeIn } from "../utils/motion";
import { projects } from "../constants";
import { github } from "../assets";

const ProjectCard = ({
  name,
  description,
  tags,
  image,
  source_code_link,
  index,
}) => {
  return (
    <Tilt
      className=" 
  min-h-[400px] sm:w-[300px] w-full  hover:shadow-card transition
  cursor-pointer rounded-xl"
    >
      <motion.div
        variants={fadeIn("up", "spring", 0.5 * index, 0.75)}
        className="w-full h-full   bg-tertiary px-3 py-4 rounded-xl"
      >
        <div className="relative rounded-lg overflow-hidden z-0">
          <img src={image} alt="project" className="w-full h-[180px]" />
          <a
            href={source_code_link}
            target="_blank"
            className="absolute -z-1 top-2 right-4 bg-black 
            rounded-full w-[30px] h-[30px] flex items-center justify-center"
            rel="noreferrer"
          >
            <img src={github} alt="github" className="w-[60%]" />
          </a>
        </div>
        <p className="my-4 text-xl font-bold">{name}</p>
        <p className="text-secondary text-sm mb-4">{description}</p>
        <div className="text-[12px] flex gap-2">
          {tags.map((tag, index) => (
            <span key={`tag-${index}`} className={`${tag.color}`}>
              #{tag.name}
            </span>
          ))}
        </div>
      </motion.div>
    </Tilt>
  );
};
const Works = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>My Work</p>
        <h2 className={styles.sectionHeadText}>Projects.</h2>
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
        {projects.map((project, index) => (
          <ProjectCard key={`project-${index}`} {...project} index={index} />
        ))}
      </div>
    </>
  );
};

export default Wrapper(Works, "work");
