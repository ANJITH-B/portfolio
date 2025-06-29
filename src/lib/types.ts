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
  image: any;
  title: string;
  description: string;
  url?: string;
  code?: any;
};
