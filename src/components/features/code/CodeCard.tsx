import React, { MouseEventHandler, useState } from "react";
import { Markup } from "./Markup";
import { Card } from "@/components/utils/Card";
import { PulseLine } from "@/components/utils/PulseLine";
import { BubbleButton } from "@/components/buttons/BubbleButton";
import { SiGithub } from "react-icons/si";
import { FiStar } from "react-icons/fi";


interface Props {
  code: string
}

export const CodeCard = (props: Props) => {
  const [selected, setSelected] = useState<"js" | "ts">("js");


  const javascriptCode = props?.code;


const typescriptCode = props?.code;

  return (
    <Card className="mx-auto w-full pt-3">
      <div className="-mx-9 mb-6 flex items-center justify-between border-b border-rose-700 px-6 pb-3">
        <div className="flex items-center gap-3">
          <ToggleChip
            onClick={() => setSelected("js")}
            selected={selected === "js"}
          >
            JavaScript
          </ToggleChip>
          <ToggleChip
            onClick={() => setSelected("ts")}
            selected={selected === "ts"}
          >
            TypeScript
          </ToggleChip>
        </div>
      </div>
      <div className="no-scrollbar -mx-6 overflow-x-scroll px-6">
        <Markup
          code={selected === "js" ? javascriptCode : typescriptCode}
          lang={selected === "js" ? "javascript" : "typescript"}
        />
      </div>
      <PulseLine />
    </Card>
  );
};

const ToggleChip = ({
  children,
  selected,
  onClick,
}: {
  children: string;
  selected: boolean;
  onClick: MouseEventHandler<HTMLButtonElement>;
}) => {
  return (
    <button
      onClick={onClick}
      className={`rounded px-1.5 py-0.5 text-sm font-medium transition-colors ${selected ? "bg-rose-600 text-rose-50" : "bg-rose-900 text-rose-50 hover:bg-rose-700"}`}
    >
      {children}
    </button>
  );
};


