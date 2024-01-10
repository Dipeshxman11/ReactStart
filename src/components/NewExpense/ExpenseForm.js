import React, { useState } from "react";
import "./ExpenseForm.css"


function ExpenseForm() {
     
     const [enteredTile , setEnteredTitle] = useState("")
     const [enteredAmount, setEnteredAmount] = useState("")
     const [enteredDate, setEnteredDate] = useState("")



    const titleChangeHandler = (event) => {
       setEnteredTitle(event.target.value)
    }

    const amountChangeHandler = (event) =>{
        setEnteredAmount(event.target.value)
    }

    const dateChangeHandler = (event) =>{
        setEnteredDate(event.target.value)
    }

    return (
        <form>
            <div className="new-expense__controls">
                <div className="new-expense__controls">
                    <label> Title </label>
                    <input type="text"  onChange={titleChangeHandler}/>
                </div>
                <div className="new-expense__controls">
                    <label> Amount </label>
                    <input type="number" min="0.01" step="0.01" onChange={amountChangeHandler} />
                </div>
                <div className="new-expense__controls">
                    <label> Date </label>
                    <input type="date" min="2024-10-01" max="2026-01-01"  onChange={dateChangeHandler}/>
                </div>
            </div>
            <div className="new-expense__actions"> 
            <button className="submit"> Add Expense </button>
            </div>
        </form>
    )
}

export default ExpenseForm;