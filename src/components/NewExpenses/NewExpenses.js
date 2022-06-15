import "./NewExpenses.css";
import ExpensesForm from "./ExpensesForm";
import React, {useState} from "react";

const NewExpenses = (props) => {
    const [showForm, updateShowFrom]=useState(false);

    const saveExpenseData = (enteredExpenseData) => {
        const expenseData = {
            id: Math.random().toString(),
            ...enteredExpenseData,
        };
        props.onAddExpense(expenseData);
        updateShowFrom(false);
    };

    const showExpenseForm = () => {
        updateShowFrom(true);
    };

    const hidExpenseForm = () => {
        updateShowFrom(false);
    };

 
    return (
        <div className="new-expense">
            {!showForm && <button onClick={showExpenseForm} >Add New Expense</button>}
            
            {showForm && <ExpensesForm onSaveExpenseData={saveExpenseData} onCancel={hidExpenseForm} /> }
            
        </div>
    );

};

export default NewExpenses;