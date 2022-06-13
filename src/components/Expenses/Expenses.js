import ExpenseItem from './ExpenseItem';
import React, {useState} from 'react';
import Card from '../UI/Card';
import './Expenses.css';
import ExpensesFilter from '../NewExpenses/ExpensesFilter';

function Expenses(props) {

  const [filteredYear, setFilteredYear] = useState('2020');
  const filterYearHandler = (selectedYear) =>{
    setFilteredYear(selectedYear);
    console.log(selectedYear)
  }
  return (
    <div>
      <Card className="expenses">
      <ExpensesFilter onSelectedYear={filterYearHandler} initialFilteredYear={filteredYear} />

        {props.items.map( item => 
            <ExpenseItem
            title={item.title}
            amount={item.amount}
            date={item.date}
          />
           
          )}
        </Card>       
    </div>
  );
}

export default Expenses;