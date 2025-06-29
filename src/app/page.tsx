"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { LibraryList, ProjectList, homeMenuItems } from "../lib/data";
import About from "@/components/About";
import MenuBar from "@/components/ui/menu-bar/MenuBar";
import Sidebar from "@/components/ui/sidebar";
import CardSection from "@/components/ui/card/CardSection";
import CardModal from "@/components/ui/modal/Modal";
import { transition } from "@/components/ui/animations/variant";
import CustomLayout from "../components/ui/custom-layout/CustomLayout";

export default function Home() {
  const [selectedCard, setSelectCard] = useState<any | null>(null);
  const handleCardClick = (card: any) => setSelectCard(card);
  const handleClose = () => setSelectCard(null);

  return (
    <CustomLayout modelData={selectedCard} handleClose={handleClose}>
      <div className="flex flex-col gap-14 w-5/6 h-screen px-10 pt-20 overflow-y-auto">
        <About />
        <CardSection
          title="Library"
          items={LibraryList}
          onCardClick={handleCardClick}
        />
        <CardSection
          title="Projects"
          items={ProjectList}
          onCardClick={handleCardClick}
        />
        <div className="relative w-full p-28 ">
          <Sidebar />
        </div>
      </div>
    </CustomLayout>
  );
}
