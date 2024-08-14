import { GradientGrid } from "../hero/GradientGrid";
import { TileGrid } from "./TileGrid";
import { MaxWidthWrapper } from "../utils/MaxWidthWrapper";
import { motion } from "framer-motion";
import { Beams } from "../utils/Beams";
import  { ComponentData } from "./componentlist"
import  { SectionData } from "./sectionlist"

export default function OceanContainer() {
  return (
    <MaxWidthWrapper className="relative flex flex-col items-center justify-center px-12 pb-48 pt-24 md:pt-24 overflow-hidden">
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
        className="mb-3 text-center text-sm leading-tight  text-zinc-50  sm:text-xl sm:leading-tight md:text-xl md:leading-tight lg:text-xl lg:leading-tight"
      >
        We build our components using <span className="text-rose-500">React, NexT and Tailwind CSS</span>, incorporating animations with <span className="text-rose-500">Framer Motion</span>, vanilla JS, keyframe animations, or another popular and stable JavaScript animation library. We make it a priority to keep all packages up to date with the latest versions.
      </motion.h1>
      <TileGrid section={"COMPONENTS"} tileData={ComponentData}/>   
      <TileGrid section={"SECTIONS"} tileData={SectionData}/>  
      <Beams/> 
      <GradientGrid />
    </MaxWidthWrapper>
  );
}
