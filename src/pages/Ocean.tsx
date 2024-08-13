import OceanContainer from "@/components/ocean/OceanContainer";

import { Barlow } from "next/font/google";

const barlowFont = Barlow({
  subsets: ["latin"],
  style: ["italic", "normal"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export default function Ocean() {
  return (
    <div className={barlowFont.className}>
      <OceanContainer />
    </div>
  );
}
