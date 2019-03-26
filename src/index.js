import React from 'react';
import ReactDOM from 'react-dom';
import 'semantic-ui-css/semantic.min.css';
import App from './App'
import { BrowserRouter } from 'react-router-dom';
import UserProvider from './providers/UserProvider';

ReactDOM.render(
  <UserProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </UserProvider>, 


document.getElementById('root'));


