import './App.css';
import Expenses from './components/Expenses/Expenses';
import NewExpenses from './components/NewExpenses/NewExpenses';
import Card from './components/UI/Card';
import React, {useState} from 'react';
function App() {
  const DUMMY_EXPENSES = [
    {
      id: 'e1',
      title: 'Toilet Paper',
      amount: 94.12,
      date: new Date(2020, 7, 14),
    },
    { id: 'e2', title: 'New TV', amount: 799.49, date: new Date(2021, 2, 12) },
    {
      id: 'e3',
      title: 'Car Insurance',
      amount: 294.67,
      date: new Date(2021, 2, 28),
    },
    {
      id: 'e4',
      title: 'New Desk (Wooden)',
      amount: 450,
      date: new Date(2021, 5, 12),
    },
  ];

  const [expenses, setExpenses]=useState(DUMMY_EXPENSES);


  const addExpenseData = expense => {
    debugger
    setExpenses((prevExpenses) => {
      return [expense];
    });
    console.log(expense.title);
    console.log(expenses[0].title);

  };
  return (
    <Card>
      <NewExpenses onAddExpenseData={addExpenseData}/>
      <Expenses items={expenses} />
     </Card>
  );
}

export default App;
