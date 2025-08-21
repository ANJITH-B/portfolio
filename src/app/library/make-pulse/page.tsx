"use client";
import { useState } from "react";
import CustomLayout from "@/components/ui/custom-layout/CustomLayout";
import { TCardItem } from "@/lib/types";
import Text from "@/components/ui/animate-text/Text";
import CardGrid from "@/components/ui/card/CardGrid";
import { Animations } from "@/lib/dataTextAnimations";

// Line-level animation (animates whole line block)
// export const lineAnimation = {
//   hidden: { opacity: 0, y: `1em` },
//   visible: {
//     opacity: 1,
//     y: `0em`,
//     transition: { duration: 0.6, ease: "easeOut" },
//   },
// };

// Word-level animation (animates each word block)
// export const wordAnimation = {
//   hidden: { opacity: 0, y: `0.5em` },
//   visible: {
//     opacity: 1,
//     y: `0em`,
//     transition: { duration: 0.4, ease: "easeOut" },
//   },
// };

// Letter-level animation (animates each character)
// export const letterAnimation = {
//   hidden: { opacity: 0, y: `0.25em` },
//   visible: {
//     opacity: 1,
//     y: `0em`,
//     transition: { duration: 0.3, ease: "easeOut" },
//   },
// };

export default function Home() {
  const [selectedCard, setSelectCard] = useState<TCardItem | null>(null);
  const handleCardClick = (card: TCardItem) => setSelectCard(card);
  const handleClose = () => setSelectCard(null);

  return (
    <CustomLayout modelData={selectedCard} handleClose={handleClose}>
      <div className="flex flex-col gap-14 md:w-5/6 h-screen px-5 md:px-10 py-20 pt-20 overflow-y-auto">
        <CardGrid title=" ">
          {Animations.map((item) => (
            <div
              key={item.id}
              onClick={() => handleCardClick?.(item)}
              className="bg-gray-200 w-full h-48 flex items-center justify-center border-2 p-3"
            >
              <Text
                letterAnimation={item.variants}
                text={item.description}
                className="font-bold"
              />
            </div>
          ))}

          {/* <Text
            text="Hello World from Framer Motion"
            lineAnimation={lineAnimation}
            wordAnimation={wordAnimation}
            letterAnimation={letterAnimation}
            viewPortAmount={0.5}
            once
            repeatDelay={2}
          /> */}
        </CardGrid>
      </div>
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

//  <div className="bg-gray-200 w-full h-60 flex items-center justify-center  border-2 ">
//           <SentenceAnimation
//             sentences={["hello anijth", "hekl "]}
//             className="uppercase font-bold"
//           />
//         </div>
//         <div className="bg-gray-200 w-full h-60 flex items-center justify-center border-2">
//           <AnimatedText
//             text="PulseVariants next line checking here is some more words for checking"
//             className=" w-60 font-bold text-center"
//           />
//         </div>

// <div className="bg-gray-200 w-full h-60 flex items-center justify-center border-2">
//           <Text
//             wordAnimation={twistVariants}
//             text="PulseVariants next line checking here is some more words for checking"
//             className=" w-60 font-bold"
//           />
//         </div>

//      <Text letterVariants={zoomVariants} text='This is my new companied component for text animation'/>
