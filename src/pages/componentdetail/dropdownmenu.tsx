import { GradientGrid } from "../../components/hero/GradientGrid";
import { MaxWidthWrapper } from "../../components/utils/MaxWidthWrapper";
import { motion } from "framer-motion";
import { Beams } from "../../components/utils/Beams";
import ComponentContainer from "@/components/ocean/oceancomponent/componentContainer";
import { CodeCard } from "@/components/features/code/CodeCard";
import { FlyoutLinkCode } from "@/components/ocean/oceancomponent/dropdown/flyoutLink/flyoutLinkCode";
import { FlyoutExample } from "@/components/ocean/oceancomponent/dropdown/flyoutLink/flyoutLink";
import StaggeredDropDown from "@/components/ocean/oceancomponent/dropdown/staggeredDropdown/staggeredDropdown";
import { StaggeredDropdownCode } from "@/components/ocean/oceancomponent/dropdown/staggeredDropdown/staggeredDropdownCode";
import {  ShiftingDropdownCode } from "@/components/ocean/oceancomponent/dropdown/shiftingDropdown/shiftingDropdownCode";
import { ShiftingDropDown } from "@/components/ocean/oceancomponent/dropdown/shiftingDropdown/shiftingDropdown";


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
     <span className="text-rose-500">Dropdown</span>
      </motion.h1>
     
      <Beams/> 
      <GradientGrid />
      <ComponentContainer name="Flyout Link">
      <FlyoutExample/>
        <CodeCard markup={FlyoutLinkCode} />
      </ComponentContainer>
      <ComponentContainer name="Staggered Dropdown">
       <StaggeredDropDown/>
        <CodeCard markup={StaggeredDropdownCode} />
      </ComponentContainer>
      <ComponentContainer name="Shifting Dropdown">
       <ShiftingDropDown/>
        <CodeCard markup={ShiftingDropdownCode} />
      </ComponentContainer>
    </MaxWidthWrapper>
  );
}
