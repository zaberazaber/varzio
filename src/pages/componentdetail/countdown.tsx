import { GradientGrid } from "../../components/hero/GradientGrid";
import { MaxWidthWrapper } from "../../components/utils/MaxWidthWrapper";
import { motion } from "framer-motion";
import { Beams } from "../../components/utils/Beams";
import ComponentContainer from "@/components/ocean/oceancomponent/componentContainer";
import { CodeCard } from "@/components/features/code/CodeCard";
import ShiftingCountdown from "@/components/ocean/oceancomponent/countdown/shiftingCountdown.tsx/shiftingCountdown";
import { ShiftingCountdownCode } from "@/components/ocean/oceancomponent/countdown/shiftingCountdown.tsx/shiftingCountdownCode";
import StickyCountdown from "@/components/ocean/oceancomponent/countdown/stickyCountdown/stickyCountdown";
import { StickyCountdownCode } from "@/components/ocean/oceancomponent/countdown/stickyCountdown/stickyCountdownCode";


export default function Cards() {
  return (
    <MaxWidthWrapper className="relative flex flex-col items-center justify-center px-3 pb-48 pt-24 md:pt-24 overflow-hidden">
             <motion.h1
        initial={{
          y: 25,
          opacity: 0,
        }}
        animate={{
          y: 0,
          opacity: 1,
          zIndex:1,
        }}
        transition={{
          duration: 1.25,
          delay: 0.25,
          ease: "easeInOut",
        }}
        className="mb-3 text-bold text-center text-2xl leading-tight  text-zinc-50  sm:text-2xl sm:leading-tight md:text-3xl md:leading-tight lg:text-4xl lg:leading-tight"
      >
     <span className="text-rose-500">Countdown</span>
      </motion.h1>
     
      <Beams/> 
      <GradientGrid />
      <ComponentContainer name="Shifting Countdown">
       <ShiftingCountdown/>
        <CodeCard markup={ShiftingCountdownCode} />
      </ComponentContainer>
      <ComponentContainer name="Sticky Countdown">
       <StickyCountdown/>
        <CodeCard markup={StickyCountdownCode} />
      </ComponentContainer>
    </MaxWidthWrapper>
  );
}
