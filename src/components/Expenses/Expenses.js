import React, { useState } from 'react';
import ExpensesList from './ExpensesList';
import Card from '../UI/Card';
import ExpensesFilter from '../NewExpenses/ExpensesFilter';
import './Expenses.css';
import ExpensesChart from './ExpensesChart';

const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState('2020');

  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  
  const filteredItems = props.items.filter( item => {
    return item.date.getFullYear().toString() === filteredYear;
  });
  


  return (
    <li>
      <Card className='expenses'>
        <ExpensesFilter
          selected={filteredYear}
          onChangeFilter={filterChangeHandler}
        />
        <ExpensesChart data={filteredItems} />
        <ExpensesList items={filteredItems}/>
        
      </Card>
    </li>
  );
};

export default Expenses;