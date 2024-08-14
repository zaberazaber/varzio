import React from "react";
import Tile from "./Tile";
  
interface DataArray {
  [key: string]: string 
}

interface Props {
  section : string
  tileData :Array<DataArray>
}

const generateTiles = (Data:Array<DataArray> ) =>{
  return Data.map((el, index )=> {
     return(
           <Tile name={el.name} url={el.url} iconMain={el.iconMain} iconSecondary={el.iconSecondary} key={index}/>
     )  
 })
}
export const TileGrid = (props:Props) => {
  return (
    <div className="p-4 z-20 text-neutral-50 md:p-12">
   
      <div className="font-bold text-rose-500 pb-2 sm:text-2xl sm:leading-tight md:text-3xl md:leading-tight lg:text-4xl lg:leading-tight">{props.section}</div>
      <div className=" grid max-w-4xl grid-cols-2 gap-4 divide-y divide-neutral-700 md:grid-cols-4 lg:grid-cols-6 md:divide-x md:divide-y-0">
      {generateTiles(props.tileData)}
      </div>
    </div>
  );
};

