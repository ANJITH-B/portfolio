"use client";
import React from "react";
import { motion } from "framer-motion";
import SlideTabs from "./SlideTabs";
import { TMenuItem } from "@/lib/types";

interface Props {
  items: TMenuItem[];
}

const MenuBar = ({ items }: Props) => {
  return (
    <motion.div>
      <div className=" h-screen pl-10  left-0 bg-neutral-50 hidden md:block">
        <SlideTabs items={items} />
      </div>
    </motion.div>
  );
};

export default MenuBar;
