import { Category } from '../category/types';

export type Cost = {
  id: string;
  name: string;
  desc?: string;
  date: string;
  createdAt: string;
  updatedAt: string;
  amount: number;
  category: Category;
  commandId: string;
  type: 'Cost';
};

export type Profit = {
  id: string;
  name: string;
  desc?: string;
  date: string;
  createdAt: string;
  updatedAt: string;
  amount: number;
  category: Category;
  commandId: string;
  type: 'Profit';
};

export type Operation = Cost | Profit;
