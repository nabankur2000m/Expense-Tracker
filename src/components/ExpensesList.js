import React, { useEffect, useState } from 'react';
import './ExpensesList.css';


function ExpensesList() {
    const [expenses, setExpenses] = useState([]);

    useEffect(() => {
        
        const fetchExpenses = () => {
            fetch('https://react-project-nabankur-default-rtdb.asia-southeast1.firebasedatabase.app/expenses.json')
            .then(response => response.json())
            .then(data => {
                const loadedExpenses = [];
                for (const key in data) {
                    loadedExpenses.push({
                        id: key,
                        ...data[key]
                    });
                }
                setExpenses(loadedExpenses);
            })
            .catch(error => {
                console.error('Error fetching data:', error);
            });
        };

        fetchExpenses();
    }, []);

    return (
        <table>
            <thead>
                <tr>
                    <th>Date</th>
                    <th>Category</th>
                    <th>Description</th>
                    <th>Amount</th>
                </tr>
            </thead>
            <tbody>
                {expenses.map(expense => (
                    <tr key={expense.id}>
                        <td>{new Date(expense.date).toLocaleDateString()}</td>
                        <td>{expense.category}</td>
                        <td>{expense.description}</td>
                        <td>Rs.{expense.amount.toFixed(2)}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
}

export default ExpensesList;
