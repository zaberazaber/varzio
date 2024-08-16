import { MaxWidthWrapper } from "@/components/utils/MaxWidthWrapper";
import React from "react";
import { CodeCard } from "./CodeCard";
import { Minigrid } from "../../utils/Minigrid";
import { FiZap } from "react-icons/fi";
import { Stepper } from "./Stepper";
import { SectionHeadingSpacing } from "@/components/utils/SectionHeadingSpacing";
import { SectionHeading } from "@/components/utils/SectionHeading";
import { SectionSubheading } from "@/components/utils/SectionSubheading";

export const CodeDemo = () => {
  return (
    <section className="relative overflow-hidden border-y border-rose-500">
      <MaxWidthWrapper className="relative z-20 py-20 md:py-36">
        <span className="mx-auto mb-3 block w-fit rounded bg-gradient-to-br from-rose-800 to-rose-950 p-3 text-3xl shadow-md shadow-rose-400">
          <FiZap />
        </span>
        <SectionHeadingSpacing>
          <SectionHeading persistCenter>
            If it's code, show how it works
          </SectionHeading>
          <SectionSubheading persistCenter>
            Show why you're better than your competitors
          </SectionSubheading>
        </SectionHeadingSpacing>
        <CodeCard markup={[]} />
        <Stepper />
      </MaxWidthWrapper>
      <Minigrid />
    </section>
  );
};
