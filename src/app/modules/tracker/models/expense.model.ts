enum ExpenseCategory {
  Groceries = 'Groceries',
  Entertainment = 'Entertainment',
  Utilities = 'Utilities',
  Transportation = 'Transportation',
  Healthcare = 'Healthcare',
  Dining = 'Dining',
  RentMortgage = 'Rent/Mortgage',
  Education = 'Education',
  Others = 'Others',
}

export interface Expense {
  id: string;
  description: string;
  amount: number;
  date: Date;
  category: ExpenseCategory;
  paymentMethod: string;
  recurring: boolean;
  frequency?: string;
  tags?: string[];
  receipt?: string;
  note?: string;
}
