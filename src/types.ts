export interface Transaction {
  id: string;
  amount: number;
  description: string;
  date: string;
}

export interface MonthlyExpense {
  month: string;
  amount: number;
}