export type DressType = {
  id: number;
  image: string;
  name: string;
  description: string | null;
  price: number;
  sizes: {
    id: number;
    name: string;
  }[];
  colors: {
    id: number;
    name: string;
  }[];
  dressLength: {
    id: number;
    name: string;
  }[];
  quantity: number;
  mainCategory: string;
  subCategory: string;
};
