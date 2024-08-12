import { GradientGrid } from "./GradientGrid";
import { Beams } from "../utils/Beams";
import { Content } from "./Content";
import { MockupScreen } from "./MockupScreen";

export const Hero = () => {
  return (
    <section className="relative flex flex-col items-center justify-center px-12 pb-48 pt-12 md:pt-24 overflow-hidden">
      <Content />
      <Beams />
      <GradientGrid />
      <MockupScreen/>
    </section>
  );
};
