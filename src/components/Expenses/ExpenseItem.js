import  ExpenseDate from "./ExpenseDate"
import ExpenseDetails from "./ExpenseDetails";
import Card from '../UI/Card';
import "./ExpenseItem.css"


function ExpenseItem(props) {

    const clickHandler = () => {
        console.log("deleted")
    }

    return (
       
            <Card className="expense-item">
               <ExpenseDate  date={props.date}/>
                <ExpenseDetails amount={props.amount} LocationOfExpenditure={props.LocationOfExpenditure} title={props.title} /> 
            <button onClick={clickHandler}> Delete </button>
            </Card>

    )
}

export default ExpenseItem;