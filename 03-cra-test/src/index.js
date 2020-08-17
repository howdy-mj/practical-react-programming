import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import 'core-js/features/string/pad-start';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();


// 환경 변수
console.log('process.env.NODE_ENV', process.env.NODE_ENV);
console.log('process.env.REACT_APP_API_URL', process.env.REACT_APP_API_URL);

console.log('환경변수 설정한 것', process.env.REACT_APP_TEMP1);
