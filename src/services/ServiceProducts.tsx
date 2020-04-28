import {Reducer} from "redux";


export interface ProductState {
    products : [],
}

const initialState:ProductState = {
    products:[],
}

export const productReducer : Reducer<ProductState> = (state=initialState , action) => {
        return state;
}

