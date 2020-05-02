import {Reducer} from "redux";
import {takeLatest, put} from 'redux-saga/effects';
const LOAD_SUCCESS = 'LOAD_SUCCESS';
export interface ProductState {
    products : [],
}

export function* loadProduct() {
   // here we implement the logic ...
}
function* loadProductsSaga() {
    yield takeLatest(LOAD_SUCCESS,loadProduct);
}

export const productSagas = [
    loadProductsSaga,
];

const initialState:ProductState = {
    products:[],
};

export const productReducer : Reducer<ProductState> = (state=initialState , action) => {

    return state;
}

