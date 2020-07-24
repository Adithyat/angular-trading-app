export class Stock {
  symbol: string;
  allocation: number;
  price: number;
}
export class Tick {
  stock: string;
  price: number;
  date: Date;
  constructor(data) {
    this.stock = data.stock;
    this.price = data.price;
    this.date = new Date(data.date);
  }
}
