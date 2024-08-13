import React from "react";
import Svg from "../svg/Svg";

interface Props {
    name?: string
    url?: string
    iconMain?: string
    iconSecondary?: string
  }

export default function Tile(props: Props) {
  return (
    <div>
      <div className="relative">
        <a
          className="group relative z-10 block w-full -translate-x-0.5 -translate-y-0.5 overflow-hidden border-2 border-neutral-950 bg-white p-4 transition-transform hover:-translate-x-2 hover:-translate-y-2 active:translate-x-0 active:translate-y-0"
          style={{
            clipPath:
              "polygon(12px 0%, calc(100% - 12px) 0%, 100% 12px, 100% 100%, calc(100% - 12px) 100%, 12px 100%, 0 100%, 0 0)",
          }}
          href={props.url}
        >
          <span
            className="absolute z-20 block origin-top-right rotate-45 bg-neutral-950 object-cover"
            style={{
              right: "-2px",
              top: 10,
              width: "16.97056274847714px",
              height: 2,
            }}
          />
            <Svg width={24} height={24} iconName={props.iconMain}/>
            <Svg width={24} height={24} iconName={props.iconSecondary}/>
          <h3 className="relative z-10 line-clamp-1 text-lg font-medium uppercase text-rose-950 duration-300 group-hover:text-rose-600">
            {props.name}
          </h3>
        </a>
        <div
          className="absolute inset-0 z-0 bg-rose-400"
          style={{
            clipPath:
              "polygon(12px 0%, calc(100% - 12px) 0%, 100% 12px, 100% 100%, calc(100% - 12px) 100%, 12px 100%, 0 100%, 0 0)",
          }}
        />
      </div>
    </div>
  );
}
