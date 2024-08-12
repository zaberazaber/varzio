import React from "react";
import {
  FiCalendar,
  FiCheck,
  FiCloud,
  FiDollarSign,
  FiMoon,
  FiWatch,
} from "react-icons/fi";
import { IconType } from "react-icons";

export const SimpleGrid = () => (
  <div className="relative z-10 grid grid-cols-2 gap-9 px-3 md:grid-cols-3 md:gap-12 md:px-6">
    <Item
      Icon={FiCalendar}
      title="Monthly updates"
      subtitle="Stay ahead with our monthly updates, bringing you the latest UI components and enhancements."/>
    <Item
      Icon={FiWatch}
      title="Save tens of hours"
      subtitle="Unlock efficiency and save tens of hours each week with our streamlined solutions."
    />
    <Item
      Icon={FiMoon}
      title="Rest easy"
      subtitle="Seamlessly switch between day and night modes for a comfortable user experience anytime."
    />
    <Item
      Icon={FiDollarSign}
      title="Save thousands"
      subtitle="Save thousands with our fast and reliable delivery service."
    />
    <Item
      Icon={FiCloud}
      title="Simple hosting"
      subtitle="A simple and affordable hosting solution that fits your budget."
    />
    <Item
      Icon={FiCheck}
      title="Everything you need"
      subtitle="Everything you need to meet all your digital needs, all in one place."
    />
  </div>
);

const Item = ({
  Icon,
  title,
  subtitle,
}: {
  Icon: IconType;
  title: string;
  subtitle: string;
}) => {
  return (
    <div>
      <h4 className="mb-1.5 flex items-start text-lg font-medium md:text-xl">
        <Icon className="mr-1.5 h-[26px] text-rose-300" />
        {title}
      </h4>
      <p className="text-sm text-zinc-400 md:text-base">{subtitle}</p>
    </div>
  );
};
