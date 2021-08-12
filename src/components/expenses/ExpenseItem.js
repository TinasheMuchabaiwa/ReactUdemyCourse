import React, { useState } from 'react';
import './ExpenseItem.css';
import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card';

function ExpenseItem(props) {

    const [title, setTitle] = useState(props.title); // const is used here even when the value changes because the change of value is being managed somewhere else by React. no "=" is being used to asign a new value
    console.log('ExpenseItem evaluated by react')

    

    return (
        <Card className="expense-item">
            <ExpenseDate date={props.date} />
            <div className="expense-item__description">
                <h2>{title}</h2>
                <div className="expense-item__price">${props.amount}</div>
            </div>
        </Card>
    )
}

export default ExpenseItem;