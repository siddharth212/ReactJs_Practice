import './Expenses.css';
import ExpenseItem from "./ExpenseItem";
import Card from './Card';

function Expenses(props) {
    return (
        <Card className="expenses">   
        {props.expenses.map((expense)=><ExpenseItem
        key={expense.id} 
        title= {expense.title}
        amount= {expense.amount}
        date = {expense.date}
        />)}  
        {/* <ExpenseItem title={props.expenses[1].title} amount={props.expenses[1].amount} date={props.expenses[1].date} /> */}
        {/* <ExpenseItem title={props.expenses[2].title} amount={props.expenses[2].amount} date={props.expenses[2].date} /> */}
        </Card>
    )

}

export default Expenses;