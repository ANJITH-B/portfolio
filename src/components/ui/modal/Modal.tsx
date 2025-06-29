"use client";
import { motion } from "framer-motion";
import Button from "../button/Button";
import { transition } from "../animations/variant";
import Image from "next/image";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneLight } from "react-syntax-highlighter/dist/esm/styles/prism";
import { Copy } from "lucide-react";
import { lazy } from "react";
import { TCardItem } from "@/lib/types";

const SmoothSlider = lazy(() => import("../carousal/carousel"));

interface CardModalProps {
  item: TCardItem;
  onClose?: () => void;
}

const CardModal = ({ item, onClose }: CardModalProps) => {
  const HandleCopy = () => {
    navigator.clipboard.writeText(item.code);
  };

  return (
    <motion.div
      initial={{ x: "100%" }}
      animate={{ x: 0 }}
      exit={{ x: "100%" }}
      transition={transition}
      className="fixed top-0 right-0 h-full w-1/3 border-l bg-white shadow-sm z-50 p-6 overflow-y-auto"
    >
      <button
        className="text-gray-500 hover:text-black mb-4 border rounded-full px-2.5 py-1"
        onClick={onClose}
      >
        ✕
      </button>
      <h2 className="text-2xl font-bold mb-2">{item.title}</h2>
      <p className="text-gray-700 mb-4">{item.description}</p>
      {Array.isArray(item.image) ? (
        <SmoothSlider images={item.image} />
      ) : (
        <Image
          src={item.image}
          alt={item.title}
          width={400}
          height={200}
          className="w-full h-60 object-cover border-2 mb-6"
        />
      )}
      {item.url ? (
        <Button
          hoverColor=""
          className="border-gray-400 shadow-gray-100 mt-6"
          url={item.url}
        >
          Live View
        </Button>
      ) : null}
      <p className="text-gray-700 mt-4">{item.description}</p>
      {item.code ? (
        <div className="border my-4 h-full">
          <button onClick={HandleCopy}>
            <Copy className=" text-gray-300 p-1" />
          </button>
          <div className=" overflow-hidden border-1  text-xs">
            <SyntaxHighlighter language="tsx" style={oneLight} wrapLongLines>
              {item.code}
            </SyntaxHighlighter>
          </div>
        </div>
      ) : null}
    </motion.div>
  );
};

export default CardModal;
