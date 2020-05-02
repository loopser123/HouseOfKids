import {applyMiddleware,createStore} from "redux";
import {createRootReducer} from "./app.reducers";
import createSagaMiddleware from 'redux-saga' ;
import {appSagas} from "./app.sagas";
import {composeWithDevTools} from "redux-devtools-extension";





export function configureStore() {

    const sagaMiddleware = createSagaMiddleware();
    const store = createStore(createRootReducer(),composeWithDevTools(applyMiddleware(sagaMiddleware)));
    // then run the saga
    if (Array.isArray(appSagas)) {
        // TODO :  we should find a type for the saga element ...
        appSagas.forEach((saga :any ) => sagaMiddleware.run(saga))
    }
        return store;

}