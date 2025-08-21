import gradient from "../../public/library/gradientbg.jpg";
import makePulse from "../../public/library/makePluse.png";
import mockup from "../../public/assets/mockup.png";
import reddot from "../../public/assets/reddot.png";
import reddotPc from "../../public/assets/reddotPc.png";
import { TCardItem, TMenuItem } from "./types";

export const LibraryList: TCardItem[] = [
  {
    id: 1,
    image: [gradient],
    title: "Magic Flow",
    // url: "/library/magic-flow",
    description:
      "Flow is an web gradient liberty based on svg build on top of framer-motion and tailwind css",
  },
  {
    id: 2,
    image: [makePulse],
    url: "/library/make-pulse",
    title: "Make Pulse",
    description:
      "makePulse is an text animating liberty, build on top of framer-motion and tailwind css",
  },
];

export const ProjectList: TCardItem[] = [
  {
    id: 1,
    image: [ reddot, reddotPc ],
    title: "Red Dot Consultancy",
    url: "https://reddotconsultancy.in",
    description:
      "Red Dot Consultancy, where I pictured a modern & minimalistic website, built on next.js styled with tailwind css and framer-motion",
  },
  {
    id: 2,
    image: [mockup, gradient],
    title: "Map My Property",
    description:
      "makePulse is an text animating liberty, build on top of framer-motion and tailwind css",
  },
  {
    id: 3,
    image: [gradient],
    title: "DJI Mavic 3 landing page",
    description:
      "Flow is an web gradient liberty based on svg build on top of framer-motion and tailwind css",
  },
];

export const homeMenuItems: TMenuItem[] = [
  { id: 1, label: "Introduction" },
  {
    id: 2,
    label: "Library",
    path: "/library",
    subList: [
      { title: "makePulse", path: "/library/make-pulse", id: 1 },
      { title: "Magic Flow", id: 2, path: "/library/magic-flow" },
    ],
  },
  {
    id: 3,
    label: "Projects",
    subList: [
      { title: "makePulse", id: 3 },
      { title: "Magic Flow", id: 2 },
      { title: "Rental Go", id: 1 },
    ],
  },
  { id: 4, label: "Docs" },
  { id: 5, label: "Connect" },
  { id: 6, label: "Blog" },
  { id: 7, label: "About" },
];

export const makePulseItems: TMenuItem[] = [
  { id: 1, label: "Introduction" },
  { id: 2, label: "Documentation" },
  { id: 3, label: "Animated Texts" },
];
