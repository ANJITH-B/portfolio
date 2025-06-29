"use client";
import React, { useEffect, useState } from "react";
import { Position } from "./types";
import List from "./List";
// import { tabItems } from './menuData';
import Cursor from "./Cursor";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { TMenuItem } from "@/lib/types";

interface Props {
  items: any;
}

const SlideTabs = ({ items }: Props) => {
  const [position, setPosition] = useState<Position>({
    top: 0,
    height: 0,
    opacity: 0,
  });
  const [detailOpen, setOpen] = useState<any>(null);

  const mouseLeave = () => {
    setPosition((prev) => ({
      ...prev,
      opacity: 0,
    }));
  };

  const handleOpenDetail = (id: number) => setOpen(id);

  return (
    <ul
      onMouseLeave={mouseLeave}
      className="relative flex flex-col h-screen w-full border-r-1 border-0 border-gray-300  pt-20"
    >
      {items.map((item: TMenuItem) => (
        <List
          key={item.id}
          onClick={() => handleOpenDetail(item.id)}
          setPosition={setPosition}
          subList={item}
          subListContent={
            <AnimatePresence mode="sync">
              {detailOpen === item.id &&
                item?.subList?.map((elem) => (
                  <Link href={elem.path ?? "/"} key={elem.id}>
                    <motion.ul
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 35, opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="text-gray-400 pl-6 cursor-pointer pointer-events-none"
                    >
                      {elem.title}
                    </motion.ul>
                  </Link>
                ))}
            </AnimatePresence>
          }
        >
          {item.label}
        </List>
      ))}
      <Cursor position={position} />
    </ul>
  );
};

export default SlideTabs;
