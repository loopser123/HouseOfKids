import {connect} from "react-redux";
import {ProductsList} from "./ProductsList";
import {AppState} from "../core/app.reducers";


const mapStateToProps = (state:AppState)=>{
    const {products} = state.productReducer;
    return {products};
};

export default connect(mapStateToProps,null)(ProductsList);
