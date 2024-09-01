import Svg from "@/components/svg/Svg";
import React, { ReactElement, ReactNode, ReactPortal, useState } from "react";

type Props = {
  children: ReactNode | any;
  name: string;
};

export default function ComponentContainer(props: Props) {
  const [activeButton, setActiveButton] = useState("view");

  const handleClick = (button: string) => {
    setActiveButton(button);
  };

  const transformStyle =
    activeButton === "view" ? "translateX(0%)" : "translateX(100%)";
  return (
    <div id={"name"} className="container mb-8  md:mb-12">
      <div className="overflow:hidden relative mb-3 flex items-center justify-between">
        <div className="flex min-w-0 flex-wrap items-center  gap-2">
          <h4 className="line-clamp-1 text-xl font-medium">{props.name}</h4>
        </div>
        <div className="flex min-w-0 items-center gap-4">
          <button className="text-xl transition-colors hover:text-rose-600">
            <Svg width={24} height={24} iconName={"Copy"} />
          </button>
          <div className="relative flex items-center overflow-hidden border border-neutral-900 bg-white">
            <button
              onClick={() => handleClick("view")}
              className="translate-colors relative z-10 flex items-center gap-2 px-3 py-2 text-sm font-medium text-neutral-950 transition-all hover:text-rose-600 md:px-2.5 md:py-1.5"
            >
              <Svg
                color={activeButton === "view" ? "white" : ""}
                width={24}
                height={24}
                iconName={"Eye"}
              />
              <span
                className={`relative ${activeButton === "view" ? "text-white" : ""} hidden md:block`}
              >
                VIEW
              </span>
            </button>
            <button
              onClick={() => handleClick("code")}
              className="translate-colors relative z-10 flex items-center  gap-2 px-3 py-2 text-sm font-medium text-neutral-950 transition-all hover:text-rose-600 md:px-2.5 md:py-1.5"
            >
              <Svg
                color={activeButton === "code" ? "white" : ""}
                width={24}
                height={24}
                iconName={"Code"}
              />
              <span
                className={`relative ${activeButton === "code" ? "text-white" : ""} hidden md:block`}
              >
                CODE
              </span>
            </button>
            <div className="absolute inset-0 z-0 flex justify-start">
              <span
                className="h-full w-1/2 bg-rose-600 transition-transform duration-300 ease-in"
                style={{
                  transform: transformStyle,
                  transformOrigin: "50% 50% 0px",
                }}
              ></span>
            </div>
          </div>
        </div>
      </div>

      <div
        className=" no-scrollbar relative w-full overflow-hidden overflow-y-scroll border border-rose-300 bg-white"
        style={{ display: "block" }}
      >
        <div className="relative min-h-[200px] place-content-center bg-neutral-900 p-4">
          {activeButton === "view" ? (
            <>{props.children[0]}</>
          ) : (
            <>{props?.children[1]}</>
          )}
        </div>
      </div>
    </div>
  );
}
