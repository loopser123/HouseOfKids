import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {compose, createStore} from "redux";
import {createRootReducer} from "./core/app.reducers";
import {Provider} from 'react-redux';



const composeEnhancers : typeof compose =  window.__REDUX_DEVTOOLS_EXTENSION__ || compose;
const store = createStore(createRootReducer(),composeEnhancers());


ReactDOM.render(<Provider store={store}>
        <App/>
    </Provider>,
    document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
