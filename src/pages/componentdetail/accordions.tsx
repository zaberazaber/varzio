import { GradientGrid } from "../../components/hero/GradientGrid";
import { MaxWidthWrapper } from "../../components/utils/MaxWidthWrapper";
import { motion } from "framer-motion";
import { Beams } from "../../components/utils/Beams";
import AccordionContainer from "@/components/ocean/oceancomponent/accordion/accordionContainer";
import { CodeCard } from "@/components/features/code/CodeCard";
import BasicFAQ from "@/components/ocean/oceancomponent/accordion/basicFAQ/basicFaq";
import  {BasicFaqCode}  from "@/components/ocean/oceancomponent/accordion/basicFAQ/basicFaqCode";
import VerticalAccordion from "@/components/ocean/oceancomponent/accordion/verticalAccordion/verticalAccordion";
import { VerticalAccordionCode } from "@/components/ocean/oceancomponent/accordion/verticalAccordion/verticalAccordionCode";
import {AccordionPathCode} from "@/components/ocean/oceancomponent/accordion/accordionPath/accordionPathCode";
import AccordionPath from "@/components/ocean/oceancomponent/accordion/accordionPath/accordionPath";

export default function Accordions() {
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
     <span className="text-rose-500">Accordion</span>
      </motion.h1>
     
      <Beams/> 
      <GradientGrid />
      <AccordionContainer name="Basic FAQ">
        <BasicFAQ/>
        <CodeCard markup={BasicFaqCode} />
      </AccordionContainer>
      <AccordionContainer name="Vertical Accordion">
        <VerticalAccordion/>
        <CodeCard markup={VerticalAccordionCode}/>
      </AccordionContainer>
      <AccordionContainer name="Accordion Path">
        <AccordionPath />
        <CodeCard markup={AccordionPathCode}/>
      </AccordionContainer>
    </MaxWidthWrapper>
  );
}
