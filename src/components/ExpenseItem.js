import  ExpenseDate from "./ExpenseDate"
import ExpenseDetails from "./ExpenseDetails";
import "./ExpenseItem.css"


function ExpenseItem(props) {

    return (
        <div>

            <div className="expense-item">
               <ExpenseDate  date={props.date}/>
                <ExpenseDetails amount={props.amount} LocationOfExpenditure={props.LocationOfExpenditure} title={props.title} /> 
            </div>

        </div>
    )
}

export default ExpenseItem;