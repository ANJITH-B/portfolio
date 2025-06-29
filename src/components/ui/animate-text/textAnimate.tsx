'use client'
import { motion, useInView, useAnimation, Variant } from "framer-motion";
import React, { useEffect, useRef, ElementType , JSX} from "react";

type AnimatedTextProps = {
  text: string | string[];
  el?: keyof JSX.IntrinsicElements | ElementType;
  className?: string;
  once?: boolean;
  repeatDelay?: number;
  animation?: {
    hidden: Variant;
    visible: Variant;
  };
};

const bounceVariants = {
  hidden: { y: 10, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { type: "spring", stiffness: 300, damping: 15 } }
};


export const AnimatedText = ({ text, el: Wrapper = "p", className, once, repeatDelay, animation = bounceVariants, }: AnimatedTextProps) => {
  
  const controls = useAnimation();
  const ref = useRef<HTMLSpanElement>(null);  
  const textArray = Array.isArray(text) ? text : [text];
  const isInView = useInView(ref, { amount: 0.5, once });

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
    <Wrapper className={className as string}>
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
          <span className="block" key={`${line}-${lineIndex}`}>
            {line.split(" ").map((word, wordIndex) => (
              <span className="inline-block" key={`${word}-${wordIndex}`}>
                {word.split("").map((char, charIndex) => (
                  <motion.span
                    key={`${char}-${charIndex}`}
                    className="inline-block"
                    variants={animation}
                  >
                    {char}
                  </motion.span>
                ))}
                <span className="inline-block">&nbsp;</span>
              </span>
            ))}
          </span>
        ))}
      </motion.span>
    </Wrapper>
  );
};




const zoomVariants = {
  hidden: { scale: 0.5, opacity: 0 },
  visible: { scale: 1, opacity: 1, transition: { duration: 0.3 } }
};

const slideVariants = {
  hidden: { x: -50, opacity: 0 },
  visible: { x: 0, opacity: 1, transition: { duration: 0.5, ease: "easeOut" } }
};

const defaultAnimations = {
  hidden: { opacity: 0, y: -5, x:5 },
  visible: { opacity: 1, y: 0, x:0, transition: { duration: 0.1, }, },
};

const twistVariants = {
  hidden: { rotate: -45, opacity: 0 },
  visible: { rotate: 0, opacity: 1, transition: { duration: 0.4, ease: "easeOut" } }
};

const pulseVariants = {
  hidden: { scale: 0.9, opacity: 0 },
  visible: { scale: [1, 1.2, 1], opacity: 1, transition: { duration: 0.6 } }
};