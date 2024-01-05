/* eslint-disable react-refresh/only-export-components */
import { BallCanvas } from "./canvas";
import { Wrapper } from "../HOC";
import { technologies } from "../constants";
const Tech = () => {
  return (
    <section className="flex flex-row flex-wrap gap-10 justify-center">
      {technologies.map((tech, index) => (
        <div key={`tech-${index}`} className="w-28 h-28">
          <BallCanvas icon={tech.icon} />
        </div>
      ))}
    </section>
  );
};

export default Wrapper(Tech, "");
