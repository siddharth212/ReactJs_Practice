import './ExpenseForm.css';
import React, { useState } from 'react';

const ExpenseForm = (props) => {
    //MultiState Approach
    const [enteredTitle, setEnteredTitle] = useState('');

    const [enteredAmount, setEnteredAmount] = useState('');

    const [selectedDate, setSelectedDate] = useState('');

    // const [userInput,setUserInput] = useState({
    //     enteredTitle:'',
    //     enteredAmount:'',
    //     selectedDate:''
    // });

    const titleChangedHandler = (event) => {
        setEnteredTitle(event.target.value)
        //setUserInput({...userInput, enteredTitle: event.target.value})

        //Better way to update state in case new state dependent on  previous state
        // setUserInput((prevState)=>{
        //     return {...prevState, enteredTitle: event.target.value }
        // })
    }

    const amountChangedHandler = (event) =>{
        setEnteredAmount(event.target.value)
        //setUserInput({...userInput, enteredAmount:event.target.value})
    }

    const dateChangedHandler =(event)=>{
        setSelectedDate(event.target.value)
        
        //setUserInput({...userInput, selectedDate:event.target.value})
    }

    const submitHandler = (event)=>{
        event.preventDefault();

        const expenseData = {
            title:enteredTitle,
            amount:enteredAmount,
            date: new Date(selectedDate)
        }

        props.onSaveExpenseData(expenseData)
        setEnteredTitle('');
        setEnteredAmount('');
        setSelectedDate('');
    }



    return (
        <form onSubmit={submitHandler} >
            <div className="new-expense__controls">
                <div className='new-expense__control'>
                    <label>Title</label>
                    <input type="text" value={enteredTitle} onChange={titleChangedHandler} />
                </div>

                <div className='new-expense__control'>
                    <label>Amount</label>
                    <input type="number" value={enteredAmount}  onChange={amountChangedHandler} min="0.01" step="0.01" />
                </div>

                <div className='new-expense__control'>
                    <label>Date</label>
                    <input type="date" value={selectedDate} onChange={dateChangedHandler} min="2019-01-01" max="2022-12-31" />
                </div>
            </div>
            <div className="new-expense__actions">
                <button type="submit">Add Expense</button>
            </div>
        </form>
    )
}

export default ExpenseForm