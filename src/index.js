// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import './index.css';
// import App from './App';
// import reportWebVitals from './reportWebVitals';

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );

// // If you want to start measuring performance in your app, pass a function
// // to log results (for example: reportWebVitals(console.log))
// // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();

import { createStore } from "redux";
const reducer=(state=0,action)=>{
    console.log('reducer called');
    switch(action.type){
      case 'INCREMENT':
        return state+action.payload;
        case 'DECREMENT':
          return state-action.payload;
          default:
            return state
    }
    
    return state;
}
const store=createStore(reducer);
store.subscribe(()=>{
    console.log('current state',store.getState())
});
store.dispatch({
  type:'INCREMENT',
  payload:1
})
store.dispatch({
  type:'INCREMENT',
  payload:5
})
store.dispatch({
  type:'DECREMENT',
  payload:3
})
