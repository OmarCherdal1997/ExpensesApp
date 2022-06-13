import './ExpenseItem.css';
import ExpenseDate from './ExpenseDate';
import React,{useState} from 'react';
import Card from '../UI/Card';



function ExpenseItem(props) {
const date= props.date

const amount= props.amount
const [title ,setTitle ] = useState(props.title)
const clickHandler= () => {
  setTitle('Updated')
  console.log(title)
}
  return (
    <Card className='expense-item'>
      <ExpenseDate date={date} />
      <div className='expense-item__description '>
          <h2>{title}</h2>
          <div className='expense-item__price'>{amount}</div>

      </div>
      <button onClick={clickHandler}>Click Here</button>
    </Card>
  );
}

export default ExpenseItem;
