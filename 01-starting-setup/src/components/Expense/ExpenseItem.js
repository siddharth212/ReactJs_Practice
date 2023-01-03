import React, {useState} from 'react';
import Card from './Card';
import ExpenseDate from './ExpenseDate';
import './ExpenseItem.css'
function ExpenseItem(props) {
    //const day = props.date.getDate();
  

    // const expenseDate = new Date(2022, 2, 28)
    // const expenseTitle = 'Car Insurance'
    // const expenseAmount = 294.67;
   console.log('this component is evaluated')
    const[title,setTitle] = useState(props.title); // It will be initialized with props.title only first time not second time

    const buttonHandler = ()=>{
        console.log('Clicked!!!!');
        setTitle('Updated title'); // this will update the state variable and reevaluate the component
        console.log(title);
    } 

    return (
        // <div className="expense-item">
        //     <div>{expenseDate.toISOString()}</div>
        //     <div className="expense-item__description ">
        //         <h2>{expenseTitle}</h2>
        //         <div className="expense-item__price ">{expenseAmount}</div>
        //     </div>

        // </div>

        <Card className="expense-item">
            <ExpenseDate date={props.date}/>
            <div className="expense-item__description ">
                <h2>{title}</h2>
                <div className="expense-item__price ">{props.amount}</div>
            </div>
            <button onClick={buttonHandler}>Change Title</button>
        </Card>

    )
}

export default ExpenseItem;