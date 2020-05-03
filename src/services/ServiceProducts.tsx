import {Reducer} from "redux";
import {takeLatest, put} from 'redux-saga/effects';
import {apiGet} from "../core/app.api";
const LOAD_SUCCESS = 'LOAD_SUCCESS';
const LOAD_PRODUCTS = 'LOAD_PRODUCTS';
export interface ProductState {
    products : [],
}

export function* loadProduct() {
    try{
        const data = yield apiGet('/products');
        yield put({type:LOAD_SUCCESS})
    }
    catch(e){
        console.error(e);
    }

}
function* loadProductsSaga() {
    yield takeLatest(LOAD_PRODUCTS,loadProduct);
    yield   put({type : LOAD_PRODUCTS});
}

export const productSagas = [
    loadProductsSaga,
];

const initialState:ProductState = {
    products:[],
};

export const productReducer : Reducer<ProductState> = (state=initialState , action) => {
    if(action.type===LOAD_SUCCESS){
    }
    return state;
}

