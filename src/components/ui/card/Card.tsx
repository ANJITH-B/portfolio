import React from "react";
import Image, { StaticImageData } from "next/image";
import { cn } from "@/lib/utils";

interface PropsCard {
  tittle: string;
  image: string | StaticImageData;
  description: string;
  className?: string;
  url?: string ;
  onClick?: () => void;
}

const Card = ({
  tittle,
  image,
  description,
  className, url,
  onClick,
}: PropsCard) => {
  return (
    <div
      onClick={onClick}
      className={cn("flex flex-col gap-2  overflow-hidden", className)}
    >
      <div className="h-36 md:h-46 flex items-center border-2 overflow-hidden bg-gray-300 relative">
        <Image
          src={image}
          alt="..."
          width={200}
          height={200}
          className="w-full h-full object-cover"
        />
        { !url && <div className="absolute bottom-0 right-0 px-2.5 md:px-3 py-0.5 md:py-1 m-2.5 md:m-3 text-[10px] md:text-xs bg-white/60 border-2 rounded-full ">
          {" "}
          Upcoming..
        </div>}
      </div>
      <p className="text-base font-medium md:text-xl pt-2">{tittle}</p>
      <p className="text-sm md:text-base pr-5 text-black/60">{description}</p>
    </div>
  );
};

export default Card;
