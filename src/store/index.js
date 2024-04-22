// src/store/index.js
import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import authReducer from './authReducer';
import expensesReducer from './expensesReducer';

const rootReducer = combineReducers({
  auth: authReducer,
  expenses: expensesReducer
});

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
