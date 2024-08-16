import React, { MouseEventHandler, useState } from "react";
import { Markup } from "./Markup";
import { Card } from "@/components/utils/Card";
import { PulseLine } from "@/components/utils/PulseLine";
import { BubbleButton } from "@/components/buttons/BubbleButton";
import { SiGithub } from "react-icons/si";
import { FiStar } from "react-icons/fi";

interface codeObject {
  name: string
  codejs: string
  codets: string
}

interface Props {
  markup?: Array<codeObject>
}

export const CodeCard = (props: Props) => {
  const [selected, setSelected] = useState<"jsx" | "tsx">("jsx");

  return props?.markup?.map((el,index) => {
      const javascriptCode = el.codejs;
      const typescriptCode = el.codets;
        return (
          <Card className="mx-auto w-full pt-3" key={index}>
            <div className="-mx-9 mb-6 flex items-center justify-between border-b border-rose-700 px-6 pb-3">
              <div className="flex items-center gap-3">
                <ToggleChip
                  onClick={() => setSelected("jsx")}
                  selected={selected === "jsx"}
                >
                  JavaScript
                </ToggleChip>
                <ToggleChip
                  onClick={() => setSelected("tsx")}
                  selected={selected === "tsx"}
                >
                  TypeScript
                </ToggleChip>
              </div>
              <p className="text-rose-400 px-1">{el.name}{"."}{selected}</p>
            </div>
            <div className="no-scrollbar -mx-6 overflow-x-scroll px-6">
              <Markup
                code={selected === "jsx" ? javascriptCode : typescriptCode}
                lang={selected === "jsx" ? "javascript" : "typescript"}
              />
            </div>
            <PulseLine />
          </Card>
        );
    })
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


