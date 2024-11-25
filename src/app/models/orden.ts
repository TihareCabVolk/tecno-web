export class Orden {
    id: number;
    cliente: number;
    producto: number;
    cantidad: number;
    total: number;
    estado: string; 
    fecha: string;   
  
    constructor(
      id: number,
    cliente: number,
    producto: number,
    cantidad: number,
    total: number,
    estado: string,
    fecha: string
    ) {
      this.id = id;
      this.cliente = cliente;
      this.producto = producto;
      this.cantidad = cantidad;
      this.total = total;
      this.estado = estado;
      this.fecha = fecha;
    }
  }
  