"use client";
import React, { ElementType, useEffect, useRef, JSX } from "react";
import { motion, useAnimation, useInView, Variant } from "framer-motion";
import { cn } from "../../../lib/utils";

type Props = {
  text: string | string[];
  el?: keyof JSX.IntrinsicElements | ElementType;
  className?: string;
  once?: boolean;
  viewPortAmount?: number;
  repeatDelay?: number;
  start?: "string";
  lineAnimation?: {
    hidden: Variant;
    visible: Variant;
  };
  letterAnimation?: {
    hidden: Variant;
    visible: Variant;
  };
  wordAnimation?: {
    hidden: Variant;
    visible: Variant;
  };
};

export const Text = (props: Props) => {
  const {
    el: Wrapper = "p",
    className,
    repeatDelay,
    text,
    viewPortAmount,
    once,
    lineAnimation,
    wordAnimation,
    letterAnimation,
  } = props;
  const controls = useAnimation();
  const ref = useRef<HTMLSpanElement>(null);
  const textArray = Array.isArray(text) ? text : [text];
  const isInView = useInView(ref, { amount: viewPortAmount ?? 0.5, once });

  useEffect(() => {
    let timeout: NodeJS.Timeout;
    const show = () => {
      controls.start("visible");
      if (repeatDelay) {
        timeout = setTimeout(async () => {
          await controls.start("hidden");
          controls.start("visible");
        }, repeatDelay);
      }
    };
    if (isInView) {
      show();
    } else {
      controls.start("hidden");
    }
    return () => clearTimeout(timeout);
  }, [isInView, controls, repeatDelay]);

  return (
    <Wrapper className={cn("", className)}>
      <span className="sr-only">{text}</span>
      <motion.span
        ref={ref}
        initial="hidden"
        animate={controls}
        variants={{
          visible: { transition: { staggerChildren: 0.1 } },
          hidden: {},
        }}
        aria-hidden="true"
      >
        {textArray.map((line, lineIndex) => (
          <motion.span
            variants={lineAnimation}
            className="block "
            key={`${line}-${lineIndex}`}
            viewport={{ once: false, amount: 0.5 }}
            transition={{ staggerChildren: 0.05 }}
          >
            {line.split(" ").map((word, wordIndex) => (
              <motion.span
                key={`${word}-${wordIndex}`}
                className="inline-block mr-2"
                variants={wordAnimation}
              > 
                  {word.split("").map((letter, letterIndex) => (
                    <motion.span
                      key={`${letter}-${letterIndex}`}
                      variants={letterAnimation}
                      className="inline-block"
                    >
                      {letter}
                    </motion.span>
                  ))}     
              </motion.span>
              ))} 
          </motion.span>
        ))}
      </motion.span>
    </Wrapper>
  );
};

export default Text;
