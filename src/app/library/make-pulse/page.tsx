"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import About from "@/components/About";
import MenuBar from "@/components/ui/menu-bar/MenuBar";
import Sidebar from "@/components/ui/sidebar";
import CardSection from "@/components/ui/card/CardSection";
import CardModal from "@/components/ui/modal/Modal";
import { transition } from "@/components/ui/animations/variant";
import { LibraryList, makePulseItems, ProjectList } from "@/lib/data";
import Carousel from "@/components/ui/carousal/carousel";
import { textAnimations } from "@/lib/dataTextAnimations";
import { SentenceAnimation } from "@/components/ui/animate-text/animateText";
import { AnimatedText } from "@/components/ui/animate-text/textAnimate";
// import { Text } from "@/components/ui/animateText/Text";
import {
  wavyVariants,
  zoomVariants,
} from "@/components/ui/animations/textanimation";
import CustomLayout from "@/components/ui/custom-layout/CustomLayout";
// import Slider from "@/components/ui/Carousal/carosul2";

export default function Home() {
  const [selectedCard, setSelectCard] = useState<any | null>(null);
  const handleCardClick = (card: any) => setSelectCard(card);
  const handleClose = () => setSelectCard(null);

  return (
    <CustomLayout>
      <div className="flex flex-col gap-14 w-5/6 h-screen px-10 pt-20 overflow-y-auto">
        <CardSection
          title="Text Animations"
          items={textAnimations}
          onCardClick={handleCardClick}
        />
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
