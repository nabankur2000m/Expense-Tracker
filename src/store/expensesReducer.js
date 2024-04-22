// src/store/expensesReducer.js
const initialState = {
    expenses: [],
    showPremium: false
  };
  
  const expensesReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'ADD_EXPENSE':
        const updatedExpenses = [...state.expenses, action.payload];
        const total = updatedExpenses.reduce((acc, expense) => acc + expense.amount, 0);
        return {
          ...state,
          expenses: updatedExpenses,
          showPremium: total > 10000
        };
      case 'SET_EXPENSES':
        return {
          ...state,
          expenses: action.payload,
          showPremium: action.payload.reduce((acc, expense) => acc + expense.amount, 0) > 10000
        };
      default:
        return state;
    }
  };
  
  export default expensesReducer;
  