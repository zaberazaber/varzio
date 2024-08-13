import React from "react";
import Tile from "./Tile";
import  {Data} from "./componentlist"
  

const generateTiles = () =>{
 return Data.map((el, index )=> {
    return(
          <Tile name={el.name} url={el.url} iconMain={el.iconMain} iconSecondary={el.iconSecondary} key={index}/>
    )  
})
   
}
export const Grid = (props:any) => {
  return (
    <div className="p-4 text-neutral-50 md:p-12">
      <div className=" grid max-w-4xl grid-cols-2 gap-4 divide-y divide-neutral-700 border-x border-b border-rose-700 md:grid-cols-4 lg:grid-cols-6 md:divide-x md:divide-y-0">
      {generateTiles()}
      </div>
    </div>
  );
};

