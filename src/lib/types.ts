import { StaticImageData } from "next/dist/shared/lib/get-img-props";

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
  variants?: any;
  title: string;
  image?: string | StaticImageData | string[] | StaticImageData[];
  description: string;
  url?: string;
  code?: string;
};
