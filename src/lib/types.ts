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
  image: string[] | StaticImageData[];
  title: string;
  description: string;
  url?: string;
  code?: string;
};
