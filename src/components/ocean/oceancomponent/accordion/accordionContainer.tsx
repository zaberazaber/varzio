import Svg from "@/components/svg/Svg";
import React, { ReactElement, ReactNode, ReactPortal, useState } from "react";


type Props = {
  children: ReactNode | any
  name: string
}


export default function AccordionContainer(props : Props) {
   
    const [activeButton, setActiveButton] = useState("view");
  
    const handleClick = (button:string) => {
      setActiveButton(button);
    };

    const transformStyle = activeButton === "view" ? "translateX(0%)" : "translateX(100%)";
  return (
   
      <div id={"name"} className="mb-8 container  md:mb-12">
        <div className="relative mb-3 flex items-center justify-between overflow:hidden">
          <div className="flex flex-wrap items-center gap-2  min-w-0">
            <h4 className="line-clamp-1 text-xl font-medium">{props.name}</h4>
          </div>
          <div className="flex items-center gap-4 min-w-0">
            <button className="text-xl transition-colors hover:text-rose-600"  >
            <Svg width={24} height={24} iconName={"Copy"}/>
            </button>
            <div className="relative flex items-center overflow-hidden border border-neutral-900 bg-white">
              <button onClick={() => handleClick("view")} className="text-sm font-medium flex items-center gap-2 px-3 md:px-2.5 py-2 md:py-1.5 transition-all relative z-10 text-neutral-950 hover:text-rose-600 translate-colors">
              <Svg color={activeButton === "view" ? "white" : ""} width={24} height={24} iconName={"Eye"}/>
                <span className={`relative ${activeButton === "view" ? "text-white" : ""} hidden md:block`}>VIEW</span>
              </button>
              <button  onClick={() => handleClick("code")} className="text-sm font-medium flex items-center gap-2  px-3 md:px-2.5 py-2 md:py-1.5 transition-all relative z-10 text-neutral-950 hover:text-rose-600 translate-colors">
                <Svg color={activeButton === "code" ? "white" : ""} width={24} height={24} iconName={"Code"}/>
                <span className={`relative ${activeButton === "code" ? "text-white" : ""} hidden md:block`} >CODE</span>
              </button>
              <div className="absolute inset-0 z-0 flex justify-start">
                <span
                  className="h-full w-1/2 bg-rose-600 transition-transform duration-300 ease-in"
                  style={{ transform: transformStyle, transformOrigin: "50% 50% 0px" }}
                ></span>
              </div>
            </div>
          </div>
        </div>

        <div
          className="no-scrollbar relative w-full overflow-hidden overflow-y-scroll border border-rose-300 bg-white"
          style={{display: "block"}}
        >
          <div className="min-h-[200px] place-content-center bg-neutral-900 p-4">
            {activeButton === "view" ?
                <>
                     {props.children[0]} 
                </>
              :    
               <>
           
              {props?.children[1]}
              </> }
           </div>
        </div>
      </div>  
  );
}
