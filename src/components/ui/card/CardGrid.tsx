import React, { FC } from "react";

type Props = {
  children: React.ReactNode;
  title : string ;
};

const CardGrid: FC<Props> = ({ children , title }) => {

  return (
    <>
      <p className="text-xl font-bold  uppercase font-poppins">{title}</p>
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-2 md:gap-5 gap-y-6">{children}</div>
    </>
  )
}

export default CardGrid ;