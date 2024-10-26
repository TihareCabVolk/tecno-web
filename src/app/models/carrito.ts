import { Productos } from "../productos";
export class Carrito {
    producto: Productos;
    cantidad: number;

    constructor(producto: Productos, cantidad: number = 1) {
        this.producto = producto;
        this.cantidad = cantidad;
    }
}
