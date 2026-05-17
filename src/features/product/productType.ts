export interface Product {
  _id: string;
  title: string;
  price: number;
  brand: string;
  description: string;
  image: string;
  category: string;
  quantity: number;
}

export interface ProductState {
  products: Product[];
  loading: boolean;
  error: string | null;
}