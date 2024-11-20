export class Cupon {
  codigo!: string;
  nombre!: string;
  descuento!: number;
  fechaInicio!: string;
  fechaTermino!: string;

  constructor(
    codigo: string,
    nombre: string,
    descuento: number,
    fechaInicio: string,
    fechaTermino: string
  ) {
    this.codigo = codigo;
    this.nombre = nombre;
    this.descuento = descuento;
    this.fechaInicio = fechaInicio;
    this.fechaTermino = fechaTermino;
  }
}
