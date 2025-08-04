"use client";
import { useState } from "react";
import { AnimatePresence } from "framer-motion";
import CardSection from "@/components/ui/card/CardSection";
import CardModal from "@/components/ui/modal/Modal";
import { textAnimations } from "@/lib/dataTextAnimations";
import { SentenceAnimation } from "@/components/ui/animate-text/animateText";
import { AnimatedText } from "@/components/ui/animate-text/textAnimate";
import CustomLayout from "@/components/ui/custom-layout/CustomLayout";
import { TCardItem } from "@/lib/types";

export default function Page() {
  const [selectedCard, setSelectCard] = useState<TCardItem | null>(null);
  const handleCardClick = (card: TCardItem) => setSelectCard(card);
  const handleClose = () => setSelectCard(null);

  return (
    <CustomLayout>
      <div className="flex flex-col gap-14 w-5/6 h-screen px-10 pt-20 overflow-y-auto">
        <CardSection items={textAnimations} onCardClick={handleCardClick} />
        <div className="bg-gray-200 w-200 h-100 flex items-center justify-center">
          <SentenceAnimation
            sentences={["hello anijth"]}
            className="uppercase"
          />
        </div>
        <div className="bg-gray-200 w-200 h-100 flex items-center justify-center">
          <AnimatedText
            text="pulseVariants next line checking here is some more words for checking"
            className="uppercase w-60"
          />
        </div>
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
