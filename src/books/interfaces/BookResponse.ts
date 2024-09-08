export interface BookResponse {
  id: number;
  author: string;
  title: string;
  status: boolean;
  stock: Stock;
}

export interface Stock {
  id: number;
  quantity: number;
}
