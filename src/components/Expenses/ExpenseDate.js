import './ExpenseDate.css'

function ExpenseDate(props){
    if (!(props.date instanceof Date) || isNaN(props.date)) {
        // console.error("Invalid date provided to ExpenseDate component.");
        return null; // or handle the error in a way that makes sense for your application
    }

    const month = props.date.toLocaleString('en-US', { month: 'long' })
    const day = props.date.toLocaleString('en-US', { day: '2-digit' })
    const year = props.date.getFullYear();
    return (
        <div className="expense-date">
          
                    <div className="expense-date__month"> {month} </div>
                    <div className="expense-date__year"> {year} </div>
                    <div className="expense-date__day"> {day} </div>
            
        </div>
    )
}

export default ExpenseDate