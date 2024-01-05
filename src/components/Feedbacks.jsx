/* eslint-disable react/prop-types */
/* eslint-disable react-refresh/only-export-components */
import { Wrapper } from "../HOC";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { fadeIn, textVariant } from "../utils/motion";
import { testimonials } from "../constants";
import { Tilt } from "react-tilt";

const FeedCard = ({
  testimonial,
  name,
  image,
  designation,
  company,
  index,
}) => {
  return (
    <Tilt
      className=" 
    min-h-[300px] md:w-[300px] w-[90%] hover:shadow-card transition
    cursor-pointer rounded-xl"
    >
      <motion.div
        variants={fadeIn("left", "spring", 0.5 * index, 0.75)}
        className="p-6 flex flex-col gap-6 justify-between
        w-full h-full  bg-black-200  rounded-xl"
      >
        <p className="text-white text-[50px] font-extrabold">&rdquo;</p>
        <p className=" text-white-100 text-[18px] tracking-wider font-[400] -mt-6">
          {testimonial}
        </p>
        <div className="flex items-center justify-between gap-4">
          <div>
            <p className="text-[15px]">
              <span className="blue-text-gradient">@</span>
              {name}
            </p>
            <p className="text-[12px] text-secondary">
              {designation} of {company}
            </p>
          </div>
          <img
            src={image}
            className="w-[50px] h-[50px] rounded-full"
            alt={name}
          />
        </div>
      </motion.div>
    </Tilt>
  );
};
const Feedbacks = () => {
  return (
    <>
      <motion.div
        variants={textVariant()}
        className="rounded-t-2xl	bg-tertiary rounded-tr-2xl
         p-4 md:p-6 min-h-[300px] w-full lg:w-[90%] mx-auto  "
      >
        <p className={styles.sectionSubText}>What People Think?</p>
        <h2 className={styles.sectionHeadText}>Testimonials.</h2>
      </motion.div>
      <div
        className="w-full rounded-b-2xl	 rounded-br-2xl
       lg:w-[90%] mx-auto bg-black-100 py-6 md:pb-16 px-6"
      >
        <div className="flex -mt-[150px] md:-mt-20 flex-wrap gap-10 justify-center">
          {testimonials.map((feed, index) => (
            <FeedCard key={`feed-${index}`} {...feed} index={index} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Wrapper(Feedbacks, "feed");
