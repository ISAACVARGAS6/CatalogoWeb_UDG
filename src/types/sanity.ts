export interface SanityProduct {
  _id: string;
  name: string;
  description: string;
  price: number;
  images: string[];
  category: string;
  color?: {
    name: string;
    hex: string;
  };
  size?: string;
  inStock: boolean;
}

export interface SanityCategory {
  _id: string;
  name: string;
  description?: string;
}

export interface ProductCardProps {
  _id?: string;
  name: string;
  price: string;
  image: string;
  category?: string;
  discount?: string;
  isNew?: boolean;
  inStock?: boolean;
  color?: { name: string; hex: string };
  size?: string;
}
