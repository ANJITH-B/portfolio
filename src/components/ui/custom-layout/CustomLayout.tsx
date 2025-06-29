"use client";
import React from "react";
import MenuBar from "../menu-bar/MenuBar";
import { transition } from "../animations/variant";
import { homeMenuItems, makePulseItems } from "@/lib/data";
import { AnimatePresence, motion } from "framer-motion";
import { usePathname } from "next/navigation";
import CardModal from "../modal/Modal";

type Props = {
  children: React.ReactNode;
  modelData?: any;
  handleClose? : () => void;
};

const CustomLayout = ({ children, modelData, handleClose }: Props) => {
  const pathname = usePathname();
  const menuItems = pathname === "/" ? homeMenuItems : makePulseItems;
  return (
    <motion.div
      initial={{ scale: 1.1, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={transition}
      className="relative flex w-screen h-full"
    >
      <div className="w-1/6 h-screen">
        <MenuBar items={menuItems} />
      </div>
      {children}
      <AnimatePresence>
        {modelData && <CardModal item={modelData} onClose={handleClose} />}
      </AnimatePresence>
    </motion.div>
  );
};

export default CustomLayout;
