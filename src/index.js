import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './store';  // Import the store configuration
import App from './App';
import './styles.css';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}> {/* Wrap App component with Provider and pass the store */}
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
