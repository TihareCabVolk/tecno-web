export class Cupon {
  codigo!: string;
  nombre!: string;
  descuento!: number;
  fechaInicio!: string;
  fechaTermino!: string;
  image_url!: string;

  constructor(
    codigo: string,
    nombre: string,
    descuento: number,
    fechaInicio: string,
    fechaTermino: string,
    image_url: string
  ) {
    this.codigo = codigo;
    this.nombre = nombre;
    this.descuento = descuento;
    this.fechaInicio = fechaInicio;
    this.fechaTermino = fechaTermino;
    this.image_url = image_url;
  }
}
