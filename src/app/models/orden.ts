export class Orden {
  order_id: number;
  user_id: number;
  total_price: number;
  date: string;

  constructor(
    order_id: number,
    user_id: number,
    total_price: number,
    date: string
  ) {
    this.order_id = order_id;
    this.user_id = user_id;
    this.total_price = total_price;
    this.date = date;
  }
}
