import { AddonsOrder } from "./AddonsOrder";

export interface ProductsOrder {
    product_id: number;
    name: string;
    description: string;
    price: number;
    img_url: string;
    category_id: number;
    quantity: number;
    addons: AddonsOrder[];  // Simplemente AddonsOrder[]
  }