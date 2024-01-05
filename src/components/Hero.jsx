import { styles } from "../styles";
import { ComputersCanvas } from "./canvas";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section
      className="relative hero  w-full mx-auto pt-[100px] lg:mb-[250px]"
      id="home"
    >
      <div
        className={`${styles.paddingX}  py-8 absolute
         mx-auto flex flex-row gap-5 items-start`}
      >
        <div className="flex flex-col justify-center items-center mt-5">
          <div className="w-5 h-5 rounded-full bg-[#915eff]" />
          <div className="w-1 sm:h-80 h-40 violet-gradient" />
        </div>
        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>
            Hi, I Am <span className="text-[#915eff]">Eric</span>
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            I&apos;m A 3D Visuals ,User <br className="block md:hidden" />
            Interfaces And Web Applications Developer
          </p>
        </div>
      </div>
      <ComputersCanvas />
      <a
        href="#about"
        className="absolute left-1/2 
      -translate-x-1/2 w-[30px] h-[54px] 
       border-[3px] border-secondary rounded-full 
      flex items-center"
      >
        <motion.div
          animate={{ y: [-13, 20, -13] }}
          transition={{ duration: 1.5, repeat: Infinity, repeatType: "loop" }}
          className="w-4 mx-auto h-4 rounded-full bg-secondary mb-1"
        />
      </a>
    </section>
  );
};

export default Hero;
