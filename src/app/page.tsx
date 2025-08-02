"use client";
import { useState } from "react";
import { LibraryList, ProjectList } from "../lib/data";
import About from "@/components/About";
import CardSection from "@/components/ui/card/CardSection";
import CustomLayout from "../components/ui/custom-layout/CustomLayout";
import { TCardItem } from "@/lib/types";
import CardGrid from "@/components/ui/card/CardGrid";
 

export default function Home() {
  const [selectedCard, setSelectCard] = useState<TCardItem | null>(null);
  const handleCardClick = (card: TCardItem) => setSelectCard(card);
  const handleClose = () => setSelectCard(null);

  return (
    <CustomLayout modelData={selectedCard} handleClose={handleClose}>
      <div className="flex flex-col gap-10 md:gap-14 md:w-5/6 h-screen px-5 md:px-10 py-20 overflow-y-auto">
        <About />
        <CardGrid title="Library">
          <CardSection items={LibraryList} onCardClick={handleCardClick} />
        </CardGrid>
        <CardGrid title="Projects">
          <CardSection items={ProjectList} onCardClick={handleCardClick} />
        </CardGrid>
      </div>
    </CustomLayout>
  );
}
