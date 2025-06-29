'use client';
import { motion } from 'framer-motion';
import { Position } from './types';

interface PropsCursor {
  position: any;
}

const Cursor = ({ position }: PropsCursor) => {
  return (
    <motion.li
      animate={{ ...position, y: 4 }} 
    className="absolute left-0 z-10 h-full w-1.5 rounded-xl bg-gray-600 "
    />
  );
};

export default Cursor;
