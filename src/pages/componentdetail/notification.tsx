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
import { SlideInNotificationCode } from "@/components/ocean/oceancomponent/notification/slideInNotification/slideInNotificationCode";
import SlideInNotifications from "@/components/ocean/oceancomponent/notification/slideInNotification/slideInNotification";
import { StackedNotificationCode } from "@/components/ocean/oceancomponent/notification/stackedNotification/stackedNotificationCode";
import StackedNotifications from "@/components/ocean/oceancomponent/notification/stackedNotification/stackedNotification";


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
     <span className="text-rose-500">Notification</span>
      </motion.h1>
     
      <Beams/> 
      <GradientGrid />
      <ComponentContainer name="Slide in Notification">
       <SlideInNotifications/>
        <CodeCard markup={SlideInNotificationCode} />
      </ComponentContainer>
      <ComponentContainer name="Stacked Notification">
       <StackedNotifications/>
        <CodeCard markup={StackedNotificationCode} />
      </ComponentContainer>
    </MaxWidthWrapper>
  );
}
