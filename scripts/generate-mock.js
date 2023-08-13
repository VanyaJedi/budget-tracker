const fs = require('fs');
const uuid = require('uuid');

const ExpenseCategory = {
  Groceries: 'Groceries',
  Entertainment: 'Entertainment',
  Utilities: 'Utilities',
  Transportation: 'Transportation',
  Healthcare: 'Healthcare',
  Dining: 'Dining',
  RentMortgage: 'Rent/Mortgage',
  Education: 'Education',
  Others: 'Others',
};

const paymentMethods = ['Cash', 'Credit Card', 'Debit Card', 'Online Transfer'];

const generateRandomExpense = () => ({
  id: uuid.v4(),
  description: `Expense ${Math.floor(Math.random() * 1000)}`,
  amount: parseFloat((Math.random() * 1000).toFixed(2)),
  date: new Date(Date.now() - Math.random() * 365 * 24 * 60 * 60 * 1000),
  category:
    ExpenseCategory[
      Object.keys(ExpenseCategory)[
        Math.floor(Math.random() * Object.keys(ExpenseCategory).length)
      ]
    ],
  paymentMethod:
    paymentMethods[Math.floor(Math.random() * paymentMethods.length)],
  recurring: Math.random() < 0.5,
  tags: Math.random() < 0.5 ? ['tag1', 'tag2'] : undefined,
  receipt: Math.random() < 0.5 ? 'receipt.jpg' : undefined,
  note: Math.random() < 0.5 ? 'Some note' : undefined,
});

const expenses = Array.from({ length: 1000 }, generateRandomExpense);

fs.writeFileSync(
  'src/app/modules/mock-backend/data/expenses.json',
  JSON.stringify(expenses)
);
