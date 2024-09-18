import { MaxWidthWrapper } from "@/components/utils/MaxWidthWrapper";
import React from "react";
import { Tower } from "./Tower";
import { MiniCard1 } from "./MiniCard1";
import { MiniCard2 } from "./MiniCard2";
import { LongCard } from "./LongCard";
import { SimpleGrid } from "./SimpleGrid";
import { SectionHeading } from "@/components/utils/SectionHeading";
import { SectionSubheading } from "@/components/utils/SectionSubheading";
import { SectionHeadingSpacing } from "@/components/utils/SectionHeadingSpacing";

export const Content = () => {
  return (
    <section>
      <MaxWidthWrapper className="relative px-20 z-20 pb-20 pt-20 md:pb-28 md:pt-40">
        <SectionHeadingSpacing>
          <SectionHeading>
            Show the world
            <br />
            <span className="bg-gradient-to-br from-rose-400 to-rose-700 bg-clip-text text-transparent">
            and stand out with confidence.
            </span>
          </SectionHeading>
          <SectionSubheading>
          Our mission is to help you build beautiful, accessible, fast, and secure websites that work seamlessly across all browsers for every user. Explore our site for expert content and guidance, brought to you by the CORE team and industry experts.
          </SectionSubheading>
        </SectionHeadingSpacing>

        <Grid />
        <div className="my-12 h-[1px] w-full bg-gradient-to-r from-rose-800/0 via-rose-400/50 to-rose-800/0 md:my-20" />
        <SimpleGrid />
      </MaxWidthWrapper>
    </section>
  );
};

const Grid = () => (
  <div className="grid grid-cols-1 gap-4 lg:grid-cols-12">
    {/* <Tower />  to remove */}
    <div className="col-span-1 grid grid-cols-2 gap-4 lg:col-span-8 lg:grid-cols-2">
      <MiniCard1 />
      <MiniCard2 />
      <LongCard />
    </div>
  </div>
);
