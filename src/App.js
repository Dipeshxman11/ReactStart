import React , {useState} from 'react';

import NewExpense from './components/NewExpense/NewExpense';
import './App.css';
import Expenses from './components/Expenses/Expenses';


const DUMMY_EXPENSES = [
  {
    id: 'e1',
    title: 'Toilet Paper',
    amount: 94.12,
    date: new Date(2020, 7, 14),
    LocationOfExpenditure : 'Mumbai'
  },
  { id: 'e2',
   title: 'New TV',
    amount: 799.49, 
    date: new Date(2021, 2, 12),
    LocationOfExpenditure : "Thane"
  },
  {
    id: 'e3',
    title: 'Car Insurance',
    amount: 294.67,
    date: new Date(2021, 2, 28),
    LocationOfExpenditure : 'Pune'
  },
  {
    id: 'e4',
    title: 'New Desk (Wooden)',
    amount: 450,
    date: new Date(2021, 5, 12),
    LocationOfExpenditure : 'Delhi'
  },
];

function App() {
   
     const [expenses, setExpenses]=useState(DUMMY_EXPENSES)
 
  const addExpenseHandler = expense => {
   setExpenses((preExpenses) => {
    return [expense, ...preExpenses]
   })
  }

  return (
    <div>
      <NewExpense  onAddExpense={addExpenseHandler} />
      <Expenses items={expenses} />
    </div>
  );
}

export default App;
