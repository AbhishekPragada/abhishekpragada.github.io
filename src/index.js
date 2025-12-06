import React from 'react';
import ReactDOM from 'react-dom';
import './tailwind.css';
import './index.scss';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import store from './store';

function renderCallback(e) {
  setTimeout(()=>{
    console.log('Rendering done');
  },6000);
}

ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>,
  document.getElementById('root'),
  renderCallback
);

reportWebVitals();
