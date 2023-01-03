import Expenses from "./components/Expense/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";
import {useState} from 'react';

function App() {
  const _expenses = [
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
  const [expenses, setExpenses] = useState(_expenses);
  

  const addExpenseHandler = expense=>{
    console.log('app.js');
    setExpenses((prevState)=>{
      return [expense, ...prevState];
    })
    console.log(expense);
  }
  return (
    <div>
      <NewExpense onExpenseData={addExpenseHandler}/>
      <Expenses expenses={expenses} />
    </div>
  );
}
export default App;