export type Cost = {
  amount: number;
  category: string;
  title: string;
  description?: string;
  date: string;
};

export type Profit = {
  amount: number;
  category: string;
  title: string;
  description?: string;
  date: string;
};

export type Operation = Cost | Profit;
