"use client";
import { useState } from "react";
import { AnimatePresence } from "framer-motion";
import CardModal from "@/components/ui/modal/Modal";
import { SentenceAnimation } from "@/components/ui/animate-text/animateText";
import { AnimatedText } from "@/components/ui/animate-text/textAnimate";
import CustomLayout from "@/components/ui/custom-layout/CustomLayout";
import { TCardItem } from "@/lib/types";
import Text from "@/components/ui/animate-text/Text";
import { twistVariants } from "@/components/ui/animations/textanimation";
import CardGrid from "@/components/ui/card/CardGrid";

export default function Home() {
  const [selectedCard, setSelectCard] = useState<TCardItem | null>(null);
  // const handleCardClick = (card: TCardItem) => setSelectCard(card);
  const handleClose = () => setSelectCard(null);

  return (
    <CustomLayout>
      <div className="flex flex-col gap-14 md:w-5/6 h-screen px-5 md:px-10 py-20 pt-20 overflow-y-auto">
        <CardGrid title="">

        <div className="bg-gray-200 w-full h-60 flex items-center justify-center  border-2 ">
          <SentenceAnimation
            sentences={["hello anijth"]}
            className="uppercase font-bold"
          />
        </div>
        <div className="bg-gray-200 w-full h-60 flex items-center justify-center border-2">
          <AnimatedText
            text="PulseVariants next line checking here is some more words for checking"
            className=" w-60 font-bold"
          />
        </div>
        <div className="bg-gray-200 w-full h-60 flex items-center justify-center border-2">
          <Text
            wordAnimation={twistVariants}
            text="PulseVariants next line checking here is some more words for checking"
            className=" w-60 font-bold"
          />
        </div>
        </CardGrid>
      </div>
      {/* <Text letterVariants={zoomVariants} text='This is my new companied component for text animation'/>` */}
      <AnimatePresence>
        {selectedCard && (
          <CardModal item={selectedCard} onClose={handleClose} />
        )}
      </AnimatePresence>
    </CustomLayout>
  );
}



// type CardProps = {
//   children: React.ReactNode;
//   title : string ;
// };

// const CardGrid: React.FC<CardProps> = ({ children , title }) => {

//   return (
//     <>
//       <p className="text-xl font-bold  uppercase font-poppins">{title}</p>
//       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-5">{children}</div>
//     </>
//   )
// }

