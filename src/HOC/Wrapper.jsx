import { styles } from "../styles";
import { motion } from "framer-motion";
import { staggerContainer } from "../utils/motion";

const Wrapper = (Component, idName) =>
  function HOC() {
    return (
      <motion.section
        variants={staggerContainer()}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: true, amount: 0.25 }}
        className={`${styles.paddingX} my-40 mx-auto relative z-0`}
        id={idName}
      >
        <Component />
      </motion.section>
    );
  };

export default Wrapper;
