export class Product {
  private _id: number;
  private _name: string;
  private _description: string;
  private _price: number;
  private _imageUrl: string;
  private _categoryId: number;

  constructor(id: number, name: string, description: string, price: number, imageUrl: string, categoryId: number) {
    this._id = id;
    this._name = name;
    this._description = description;
    this._price = price;
    this._imageUrl = imageUrl;
    this._categoryId = categoryId;
  }

  public get id(): number {
    return this._id;
  }

  public set id(value: number) {
    this._id = value;
  }

  public get name(): string {
    return this._name;
  }

  public set name(value: string) {
    this._name = value;
  }

  public get description(): string {
    return this._description;
  }

  public set description(value: string) {
    this._description = value;
  }

  public get price(): number {
    return this._price;
  }

  public set price(value: number) {
    this._price = value;
  }

  public get imageUrl(): string {
    return this._imageUrl;
  }

  public set imageUrl(value: string) {
    this._imageUrl = value;
  }

  public get categoryId(): number {
    return this._categoryId;
  }

  public set categoryId(value: number) {
    this._categoryId = value;
  }
}
