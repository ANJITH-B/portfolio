"use client";
import React, { useRef, useState } from "react";
import { motion } from "framer-motion";

const Sidebar = () => {
  return (
    <motion.div>
      <div className="grid h-screen place-content-center bg-neutral-100">
        <SlideTabs />
      </div>
    </motion.div>
  );
};

interface Position {
  left: number;
  width: number;
  opacity: number;
}

const SlideTabs = () => {
  const [position, setPosition] = useState<Position>({
    left: 0,
    width: 0,
    opacity: 0,
  });

  const mouseLeave = () => {
    setPosition((pv) => ({
      ...pv,
      opacity: 0,
    }));
  };

  return (
    <ul
      onMouseLeave={mouseLeave}
      className="relative mx-auto flex w-fit rounded-full border-2 border-black bg-white p-1"
    >
      <Tab setPosition={setPosition}>Home</Tab>
      <Tab setPosition={setPosition}>Pricing</Tab>
      <Tab setPosition={setPosition}>Features</Tab>
      <Tab setPosition={setPosition}>Docs</Tab>
      <Tab setPosition={setPosition}>Blog</Tab>
      <Cursor position={position} />
    </ul>
  );
};

interface PropsTab {
  children: React.ReactNode;
  setPosition: React.Dispatch<React.SetStateAction<Position>>;
}

const Tab = ({ children, setPosition }: PropsTab) => {
  const ref = useRef<HTMLLIElement>(null);

  return (
    <li
      ref={ref}
      onMouseEnter={() => {
        if (!ref.current) return;
        const { width } = ref.current.getBoundingClientRect();
        setPosition({ width, opacity: 1, left: ref.current.offsetLeft });
      }}
      className="relative z-10 block cursor pointer px-3 
        py-1.5 text-xs uppercase text-gray-100 mix-blend-difference
         md:px-5 md:py-3 md:text-base"
    >
      {children}
    </li>
  );
};

interface PropsCursor {
  position: Position; // width hight opacity
}

const Cursor = ({ position }: PropsCursor) => {
  return (
    <motion.li
      animate={{ ...position }}
      className="absolute z-0 h-7 w-36 rounded-full bg-black md:h-12 "
    />
  );
};

export default Sidebar;
