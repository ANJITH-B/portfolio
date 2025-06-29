export const twistVariants = {
  hidden: { rotate: -45, opacity: 0 },
  visible: {
    rotate: 0,
    opacity: 1,
    transition: { duration: 0.4, ease: "easeOut" }
  }
};
export const pulseVariants = {
  hidden: { scale: 0.9, opacity: 0 },
  visible: {
    scale: [1, 1.2, 1],
    opacity: 1,
    transition: { duration: 0.6 }
  }
};
export const wavyVariants = {
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
export const zoomVariants = {
  hidden: { scale: 0.5, opacity: 0 },
  visible: {
    scale: 1,
    opacity: 1,
    transition: { duration: 0.3 }
  }
};
export const slideVariants = {
  hidden: { x: -50, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.5, ease: "easeOut" }
  }
};
export const bounceVariants = {
  hidden: { y: 10, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { type: "spring", stiffness: 300, damping: 15 }
  }
};
