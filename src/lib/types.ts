import { StaticImageData } from "next/dist/shared/lib/get-img-props";
import type { TargetAndTransition } from "framer-motion";

type RequiredVariants = {
  hidden: TargetAndTransition;
  visible: TargetAndTransition;
};

export type TMenuItem = {
  id: number;
  label: string;
  path?: string;
  subList?: {
    id: number;
    title: string;
    path?: string;
  }[];
};

export type TCardItem = {
  id: number;
  variants?: RequiredVariants;
  title: string;
  image?: string | StaticImageData | string[] | StaticImageData[];
  description: string;
  url?: string;
  code?: string;
};
