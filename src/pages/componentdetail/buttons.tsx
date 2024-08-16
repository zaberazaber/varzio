import { GradientGrid } from "../../components/hero/GradientGrid";
import { MaxWidthWrapper } from "../../components/utils/MaxWidthWrapper";
import { motion } from "framer-motion";
import { Beams } from "../../components/utils/Beams";
import ComponentContainer from "@/components/ocean/oceancomponent/componentContainer";
import { CodeCard } from "@/components/features/code/CodeCard";
import { HamburgerButton } from "@/components/ocean/oceancomponent/button/hamburger/hamburger";
import { HamburgerCode } from "@/components/ocean/oceancomponent/button/hamburger/hamburgerCode";
import { EncryptButton } from "@/components/ocean/oceancomponent/button/encrypt/encrypt";
import { EncryptCode } from "@/components/ocean/oceancomponent/button/encrypt/encryptCode";

export default function Buttons() {
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
     <span className="text-rose-500">Button</span>
      </motion.h1>
     
      <Beams/> 
      <GradientGrid />
      <ComponentContainer name="Hamburger Button">
      
       <div className="grid place-content-center">
       <HamburgerButton />
        </div>
        <CodeCard markup={HamburgerCode} />
      </ComponentContainer>
      <ComponentContainer name="Encypt Button">
      
       <div className="grid place-content-center">
       <EncryptButton />
        </div>
        <CodeCard markup={EncryptCode} />
      </ComponentContainer>
    </MaxWidthWrapper>
  );
}
