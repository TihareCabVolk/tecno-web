export class Cupon {
  codigo!: string;
  nombre!: string;
  descuento!: number;
  fecha_inicio!: string;
  fecha_termino!: string;

  constructor(
    codigo: string,
    nombre: string,
    descuento: number,
    fecha_inicio: string,
    fecha_termino: string
  ) {
    this.codigo = codigo;
    this.nombre = nombre;
    this.descuento = descuento;
    this.fecha_inicio = fecha_inicio;
    this.fecha_termino = fecha_termino;
  }
}
