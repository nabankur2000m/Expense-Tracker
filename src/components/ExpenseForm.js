import React, { useState } from 'react';
import './ExpenseForm.css'; // Ensure this is properly linked

function ExpenseForm({ onAddExpense }) {
  const [enteredAmount, setEnteredAmount] = useState('');
  const [enteredDescription, setEnteredDescription] = useState('');
  const [enteredCategory, setEnteredCategory] = useState('');
  const [formError, setFormError] = useState('');

  const validateInput = () => {
    if (enteredAmount <= 0) {
      setFormError('Amount must be greater than zero');
      return false;
    }
    if (!enteredCategory) {
      setFormError('Please select a category');
      return false;
    }
    setFormError('');
    return true;
  };

  const submitHandler = (event) => {
    event.preventDefault();
    if (!validateInput()) return;
    const expenseData = {
      amount: parseFloat(enteredAmount),
      description: enteredDescription,
      category: enteredCategory
    };
    onAddExpense(expenseData);
    setEnteredAmount('');
    setEnteredDescription('');
    setEnteredCategory('');
  };

  return (
    <div className="expense-form-container">
      <form onSubmit={submitHandler} className="expense-form">
        <h2>Add Your Expense</h2>
        {formError && <p className="form-error">{formError}</p>}
        <div className="input-group">
          <label htmlFor="amount">Amount</label>
          <input
            id="amount"
            type="number"
            value={enteredAmount}
            onChange={(e) => setEnteredAmount(e.target.value)}
            required
            aria-describedby="amountHelp"
          />
          <small id="amountHelp">Enter the amount you spent</small>
        </div>
        <div className="input-group">
          <label htmlFor="description">Description</label>
          <input
            id="description"
            type="text"
            value={enteredDescription}
            onChange={(e) => setEnteredDescription(e.target.value)}
            required
          />
        </div>
        <div className="input-group">
          <label htmlFor="category">Category</label>
          <select
            id="category"
            value={enteredCategory}
            onChange={(e) => setEnteredCategory(e.target.value)}
            required
          >
            <option value="">Select Category</option>
            <option value="Food">Food</option>
            <option value="Petrol">Petrol</option>
            <option value="Salary">Salary</option>
          </select>
        </div>
        <button type="submit" className="submit-btn">Add Expense</button>
      </form>
    </div>
  );
}

export default ExpenseForm;
