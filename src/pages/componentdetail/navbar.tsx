import { GradientGrid } from "../../components/hero/GradientGrid";
import { MaxWidthWrapper } from "../../components/utils/MaxWidthWrapper";
import { motion } from "framer-motion";
import { Beams } from "../../components/utils/Beams";
import ComponentContainer from "@/components/ocean/oceancomponent/componentContainer";
import { CodeCard } from "@/components/features/code/CodeCard";
import { RoundedDrawerNavExample } from "@/components/ocean/oceancomponent/navbar/roundedDrawerNav/roundedDrawerNav";
import { RoundedDrawerNavCode } from "@/components/ocean/oceancomponent/navbar/roundedDrawerNav/roundedDrawerNavCode";
import { FlyoutNavCode } from "@/components/ocean/oceancomponent/navbar/flyoutNav/flyoutNavCode";
import FlyoutNavExample from "@/components/ocean/oceancomponent/navbar/flyoutNav/flyoutNav";
import { ExampleCornerNav } from "@/components/ocean/oceancomponent/navbar/cornerNav/cornerNav";
import { CornerNavCode } from "@/components/ocean/oceancomponent/navbar/cornerNav/cornerNavCode";


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
     <span className="text-rose-500">Navbar & Menus</span>
      </motion.h1>
     
      <Beams/> 
      <GradientGrid />
      <ComponentContainer name="Rounded Drawer Nav">
       <RoundedDrawerNavExample/>
        <CodeCard markup={RoundedDrawerNavCode} />
      </ComponentContainer>
      <ComponentContainer name="Flyout Nav">
       <FlyoutNavExample/>
        <CodeCard markup={FlyoutNavCode} />
      </ComponentContainer>
      <ComponentContainer name="Corner Nav">
       <ExampleCornerNav/>
        <CodeCard markup={CornerNavCode} />
      </ComponentContainer>
    </MaxWidthWrapper>
  );
}
