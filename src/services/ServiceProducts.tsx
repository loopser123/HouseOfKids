import {Reducer} from "redux";
import {takeLatest, put} from 'redux-saga/effects';
import {apiGet} from "../core/app.api";
import {Product} from "../model/Product";
const LOAD_SUCCESS = 'LOAD_SUCCESS';
const LOAD_PRODUCTS = 'LOAD_PRODUCTS';

// action creator
export function loadProductsAction(products : any) {
    return {
        type : LOAD_SUCCESS,
        payload : {
            products
        }
    }
}

export interface ProductState {
    products :Product[],
}

export function* loadProduct() {
    try{
        const products = yield apiGet('/products');
        yield put(loadProductsAction(products));

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
    products :[],
};

export const productReducer : Reducer<ProductState> = (state=initialState , action) => {
    if(action.type===LOAD_SUCCESS){

         return  Object.assign({},state, {
            products : [...state.products,
                ...action.payload.products
                ]
        });
    }
    return state;
}

