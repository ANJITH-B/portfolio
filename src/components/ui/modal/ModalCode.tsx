import React from "react";
import { motion } from "framer-motion";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneLight } from "react-syntax-highlighter/dist/esm/styles/prism"; //  oneDark,
import { Copy } from "lucide-react";
import { TCardItem } from "@/lib/types";
import { transition } from "../animations/variant";

type Props = {
  item: TCardItem;
  onClose?: () => void;
};

const ModalCode = ({ item, onClose }: Props) => {
  const HandleCopy = () => {
    navigator.clipboard.writeText(item?.code ?? item.description);
  };
  return (
    <motion.div
      initial={{ x: "100%" }}
      animate={{ x: 0 }}
      exit={{ x: "100%" }}
      transition={transition}
      className="fixed top-0 right-0 h-full w-1/2 xl:w-[600px] 2xl:w-[650px] border-l bg-white shadow-sm z-50 p-6 overflow-y-auto"
    >
      <button
        onClick={onClose}
        className="text-gray-500 hover:text-black border rounded-full px-2.5 py-1 mb-4"
      >
        ✕
      </button>

      <div className="flex flex-row justify-between">
        <h2 className="text-2xl font-bold  mb-4">{item.title}</h2>
        <button className="text-gray-500 hover:text-black text-xs border rounded-full px-2.5 py-1  mb-4">
          Refresh
        </button>
      </div>

      <p className="text-gray-700 mb-4">{item.description}</p>

      <SyntaxHighlighter
        language="jsx"
        className="border text-xs"
        style={oneLight}
        wrapLongLines
      >
        {`npm i make-pules`}
      </SyntaxHighlighter>

      {item.variants ? (
        <>
          <div className="border px-3 py-1  mt-4  flex flex-row justify-between items-center">
            <p className="text-gray-500 text-xs">{item.title}</p>
            <button onClick={HandleCopy}>
              <Copy className=" text-gray-300 p-1" />
            </button>
          </div>
          <SyntaxHighlighter
            language="jsx"
            className="border-1  text-xs "
            style={oneLight}
            wrapLongLines
          >
            {`${JSON.stringify(item.title, null, 2)} = ${JSON.stringify(
              item.variants,
              null,
              2
            )}`}
          </SyntaxHighlighter>
        </>
      ) : null}
    </motion.div>
  );
};

export default ModalCode;
