import { GradientGrid } from "../hero/GradientGrid";
import { Grid } from "./Grid";
import { MaxWidthWrapper } from "../utils/MaxWidthWrapper";
import { Beam } from "../utils/Beam";

export default function OceanContainer() {
  return (
    <MaxWidthWrapper className="relative z-20 flex flex-col items-center justify-center pb-12 pt-24 md:pb-36 md:pt-36">
      <Grid/>
      <Beam />
      <GradientGrid />
    </MaxWidthWrapper>
  );
}
