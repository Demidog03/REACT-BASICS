import React from 'react';
import {useSelector} from "react-redux";

function TestPage() {
    const cash = useSelector(state => state.cashReducer.cash)
    const customers = useSelector(state => state.customerReducer.customers)
    return (
        <div>
            <h2>SECOND PAGE</h2>
            <h1>{cash}$</h1>
            <div>
                {customers.map(customer => <h2>{customer.name}</h2>)}
            </div>
        </div>
    );
}

export default TestPage;
