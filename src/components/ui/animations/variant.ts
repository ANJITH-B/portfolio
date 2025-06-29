import { easeInOut } from "framer-motion";

export const transition = {
  duration: 0.6,
  ease: [0.43, 0.13, 0.23, 0.96],
};

export const menuTextExit = {
    transition: { ease: 'easeIn', duration: 10 } 
}

export const variants = {
    ease: easeInOut,
    duration : 1
}

export const carousal = { 
  duration: 1.2,
  ease: easeInOut,
};