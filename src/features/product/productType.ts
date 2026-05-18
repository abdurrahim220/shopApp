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

export interface PaginationMeta {
  page: number;
  limit: number;
  total: number;
  totalPages: number;
}

export interface ProductState {
  products: Product[]; // for view all/paginated list
  homeProducts: Product[]; // specifically for home screen (6 products)
  meta: PaginationMeta | null; // pagination details
  loading: boolean;
  error: string | null;
}