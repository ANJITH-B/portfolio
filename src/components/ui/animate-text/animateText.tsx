"use client";
import React from "react";
import { motion } from "framer-motion";
import { cn } from "../../../lib/utils";

const wordVariants = {
    hidden: { opacity: 0, y: 13, filter: "blur(4px)" },
    visible: { opacity: 1, y: 0, filter: "blur(0px)", transition: { duration: 0.4 } },
  };
  
  const letterVariants = {
    hidden: { opacity: 0, y: 10, filter: "blur(2px)" },
    visible: { opacity: 1, y: 0, filter: "blur(0px)", transition: { duration: 0.2 } },
  };

const wavyVariants = {
  hidden: { y: 10, opacity: 0 },
  visible: (i: number) => ({
    y: 0,
    opacity: 1,
    transition: {
      delay: i * 0.05,
      type: "spring",
      stiffness: 120
    }
  })
};

export const SentenceAnimation = ({
  sentences,
  className,
}: {
  sentences: string[];
  className?: string;


}) => {
  return (
    <div className={cn("flex flex-col gap-4", className)}>
      {sentences.map((sentence, index) => (
        <motion.div
          key={index}
          className="overflow-hidden"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.5 }} 
          transition={{ staggerChildren: 0.05 }}
        >
          {sentence.split(" ").map((word, wordIndex) => (
            <motion.span
              key={wordIndex}
              variants={wordVariants}
              className="inline-block whitespace-nowrap"
            >
              {word.split(" ").map((letter, letterIndex) => (
                <motion.span
                  key={letterIndex}
                  variants={letterVariants}
                  className="inline-block"
                >
                  {letter}
                </motion.span>
              ))}
              <span className="inline-block">&nbsp;</span>
            </motion.span>
          ))}
        </motion.div>
      ))}
    </div>
  );
};