import "./NewExpenses.css";
import ExpensesForm from "./ExpensesForm";

const NewExpenses = (props) => {
    const saveExpenseData = (enteredExpenseData) => {
        const expenseData = {
            id: 'e6',//Math.random().toString(),
            ...enteredExpenseData,
        };
        props.onAddExpenseData(expenseData);
    };
    return (
        <div className="new-expense">
            <ExpensesForm onSaveExpenseData={saveExpenseData} />
        </div>
    );

};

export default NewExpenses;