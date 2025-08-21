 import { TCardItem } from "./types";

export const Animations: TCardItem[] = [
  {
    id: 1,
    title: "twistVariants",
    variants: {
      hidden: { rotate: -45, opacity: 0 },
      visible: {
        rotate: 0,
        opacity: 1,
        transition: { duration: 0.4, ease: "easeOut" },
      },
    },
    description: "A smooth typewriter animation using framer-motion.",
  },
  {
    id: 2,
    title: "pulseVariants",
    variants: {
      hidden: { scale: 0.9, opacity: 0 },
      visible: {
        scale: [1, 1.2, 1],
        opacity: 1,
        transition: { duration: 0.6 },
      },
    },
    description: "A smooth typewriter animation using framer-motion.",
  },
  {
    id: 3,
    title: "wavyVariants",
    variants: {
      hidden: { y: 10, opacity: 0 },
      visible: (i: number) => ({
        y: 0,
        opacity: 1,
        transition: {
          delay: i * 0.05,
          type: "spring",
          stiffness: 120,
        },
      }),
    },
    description: "A smooth typewriter animation using framer-motion.",
  },
  {
    id: 4,
    title: "zoomVariants",
    variants: {
      hidden: { scale: 0.5, opacity: 0 },
      visible: {
        scale: 1,
        opacity: 1,
        transition: { duration: 0.3 },
      },
    },
    description: "A smooth typewriter animation using framer-motion.",
  },
  {
    id: 5,
    title: "slideVariants",
    variants: {
      hidden: { x: -50, opacity: 0 },
      visible: {
        x: 0,
        opacity: 1,
        transition: { duration: 0.5, ease: "easeOut" },
      },
    },
    description: "A smooth typewriter animation using framer-motion.",
  },
  {
    id: 6,
    title: "bounceVariants",
    variants: {
      hidden: { y: 10, opacity: 0 },
      visible: {
        y: 0,
        opacity: 1,
        transition: { type: "spring", stiffness: 300, damping: 15 },
      },
    },
    description: "A smooth typewriter animation using framer-motion.",
  }
];






export const twistVariants = {
  hidden: { rotate: -45, opacity: 0 },
  visible: {
    rotate: 0,
    opacity: 1,
    transition: { duration: 0.4, ease: "easeOut" },
  },
};
export const pulseVariants = {
  hidden: { scale: 0.9, opacity: 0 },
  visible: {
    scale: [1, 1.2, 1],
    opacity: 1,
    transition: { duration: 0.6 },
  },
};
export const wavyVariants = {
  hidden: { y: 10, opacity: 0 },
  visible: (i: number) => ({
    y: 0,
    opacity: 1,
    transition: {
      delay: i * 0.05,
      type: "spring",
      stiffness: 120,
    },
  }),
};
export const zoomVariants = {
  hidden: { scale: 0.5, opacity: 0 },
  visible: {
    scale: 1,
    opacity: 1,
    transition: { duration: 0.3 },
  },
};
export const slideVariants = {
  hidden: { x: -50, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};
export const bounceVariants = {
  hidden: { y: 10, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { type: "spring", stiffness: 300, damping: 15 },
  },
};
