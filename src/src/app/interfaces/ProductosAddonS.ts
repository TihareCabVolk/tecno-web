export interface ProductosAddonS {
  producto_id: number;
  name: string;
  description: string;
  price: number;
  image_url: string;
  category_id: number;
  opcionesSeleccionadas?: any[];
}
