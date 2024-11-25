import { ProductsOrder } from "./ProductOrder";

export interface Order {
  order_id: number | null;
  date: string | null;
  user_id: number | null;
  total_price: number;
  products: ProductsOrder[];  // Simplemente ProductsOrder[]
}
