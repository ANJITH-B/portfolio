"use client";
import { useCallback, useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image, { StaticImageData } from "next/image";

interface Props {
  images: string[] | StaticImageData[];
}

const SmoothSlider = ({ images }: Props) => {
  const [index, setIndex] = useState(0);

  const nextSlide = useCallback(() => {
    setIndex((prev) => (prev + 1) % images.length);
  }, [images.length]);

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 3000);
    return () => {
      clearInterval(interval);
    };
  }, [nextSlide]);

  return (
    <div
      className="relative w-full h-40 lg:h-70 xl:h-85 overflow-hidden bg-black border-2"
      onClick={nextSlide}
    >
      <AnimatePresence initial={false} mode="popLayout">
        <motion.div
          key={index + "-wrapper"}
          className="absolute inset-0 overflow-hidden"
          initial={{ x: "100%" }}
          animate={{ x: "0%" }}
          exit={{ x: "-100%" }}
          transition={{ duration: 1, ease: [0.43, 0.13, 0.23, 0.96] }}
        >
          <motion.div
            key={index + "-image"}
            className="absolute inset-0 "
            initial={{ x: "-30%" }}
            animate={{ x: "0%" }}
            exit={{ x: "30%" }}
            transition={{ duration: 1, ease: "easeInOut" }}
          >
            <Image
              src={images[index]}
              alt={`Slide ${index}`}
              fill
              className="object-cover"
              priority
            />
          </motion.div>
        </motion.div>
      </AnimatePresence>
      {/* <div className="absolute flex flex-row gap-2 items left-10 bottom-10 z-10">
        {images.map((_,i) => (
          <motion.div key={i} className='h-1 w-16 bg-gray-400'>
              {(i === index) && 
              <motion.div key={index} className='h-full w-full bg-white' 
                initial={{ width: 0 }}
                animate={{ width: "100%" }}
                transition={{duration: 4 , ease:[0.43, 0.13, 0.23, 0.96]}}>
              </motion.div>}
          </motion.div>
        ))}
      </div> */}
    </div>
  );
};

export default SmoothSlider;
