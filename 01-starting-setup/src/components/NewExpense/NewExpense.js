import './NewExpense.css'
import ExpenseForm from './ExpenseForm'
const NewExpense = (props)=>{

    const saveExpenseData = (enteredExpenseData)=>{
        const expenseData = {
            ...enteredExpenseData, id:Math.random().toString()
         }
         console.log(expenseData);
         props.onExpenseData(expenseData);
    }

    return <div className="new-expense">
        <ExpenseForm onSaveExpenseData = {saveExpenseData} />
    </div>

}

export default NewExpense;