import {combineReducers} from "redux";
import {productReducer, ProductState} from "../services/ServiceProducts";

export interface AppState {
    productReducer : ProductState;
}


export function createRootReducer() {
   return  combineReducers<AppState>({
        productReducer : productReducer,
    });
}
