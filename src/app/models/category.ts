export class Category {
    private _id: number;
    private _nombre: string;
    private _descripcion: string;
    private _imgUrl: string;
  
    constructor(id: number, nombre: string, descripcion: string, imgUrl: string) {
      this._id = id;
      this._nombre = nombre;
      this._descripcion = descripcion;
      this._imgUrl = imgUrl;
    }
  
    public get id(): number {
      return this._id;
    }
  
    public set id(value: number) {
      this._id = value;
    }
  
    public get nombre(): string {
      return this._nombre;
    }
  
    public set nombre(value: string) {
      this._nombre = value;
    }
  
    public get descripcion(): string {
      return this._descripcion;
    }
  
    public set descripcion(value: string) {
      this._descripcion = value;
    }
  
    public get imgUrl(): string {
      return this._imgUrl;
    }
  
    public set imgUrl(value: string) {
      this._imgUrl = value;
    }
  }