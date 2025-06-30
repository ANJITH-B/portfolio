import makepluse from "../../public/library/mockup.png";
import { TCardItem } from "./types";

export const textAnimations: TCardItem[] = [
  {
    id: 1,
    title: "Type Writer",
    description: "A smooth typewriter animation using framer-motion.",
    image: [makepluse],
    code: `import { motion } from 'framer-motion';
        const Typewriter = ({ text }) => (
        <motion.span
            initial={{ width: 0 }}
            animate={{ width: '100%' }}
            transition={{ duration: 2, ease: 'linear' }}
        >
            {text}
        </motion.span>
        );`,
  },
  {
    id: 2,
    title: "Type Writer",
    description: "A smooth typewriter animation using framer-motion.",
    image: [makepluse],
    code: `import { motion } from 'framer-motion';
        const Typewriter = ({ text }) => (
        <motion.span
            initial={{ width: 0 }}
            animate={{ width: '100%' }}
            transition={{ duration: 2, ease: 'linear' }}
        >
            {text}
        </motion.span>
        );`,
  },
];
