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
import { RevealBento } from "@/components/ocean/oceancomponent/grid/revealBento/revealBento";
import { RevealBentoCode } from "@/components/ocean/oceancomponent/grid/revealBento/revealBentoCode";
import { GridCardCode } from "@/components/ocean/oceancomponent/grid/gridCard/gridCardCode";
import { GridCards } from "@/components/ocean/oceancomponent/grid/gridCard/gridCard";
import { BackButton } from "@/components/utils/BackButton";


export default function Cards() {
  return (
    <MaxWidthWrapper className="relative flex flex-col items-center justify-center px-3 pb-48 pt-24 md:pt-24 overflow-hidden">
                 <div className="z-100 container mb-8 mx-auto max-w-7xl px-4 md:px-8 md:mb-12">
        <BackButton className="" label="Go Back"/>
        <motion.div
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
      
     <div className="text-rose-500">Grids</div>
      </motion.div>
      </div>
     
      <Beams/> 
      <GradientGrid />
      <ComponentContainer name="Reveal Bento">
       <RevealBento/>
        <CodeCard markup={RevealBentoCode} />
      </ComponentContainer>
      <ComponentContainer name="Grid Cards">
       <GridCards/>
        <CodeCard markup={GridCardCode} />
      </ComponentContainer>
    </MaxWidthWrapper>
  );
}
