import React from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";

interface PropsCard {
  tittle : string ;
  image : any ;
  description : string ;
  className? : string ;
  onClick ? : () => void ;
}

const Card = ({tittle, image, description , className , onClick}: PropsCard) => {
  return (
    <div onClick={onClick} className={cn("flex flex-col gap-2  overflow-hidden", className)}>
    <div className="h-46 flex items-center border-2 overflow-hidden bg-gray-300">
        <Image src={image} alt="..." width={200} height={200} className="w-full" />
      </div>
      <p className="text-xl pt-2">{tittle}</p>
      <p className=" pr-5">{description}</p>
    </div>
  );
};

export default Card