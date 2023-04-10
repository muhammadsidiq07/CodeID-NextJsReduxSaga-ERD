import { combineReducers } from "redux";
import UserReducer from "./userReducer";
import CustomerReducer from "./customerReducer";
import OrderReducer from "./orderReducer";
import ProductCategoryReducer from "./productcategoryReducer";
import ProductReduce from "./productReducer";
import OrderDetailReducer from "./orderdetailReducer";

const rootReducer = combineReducers({
    userState: UserReducer,
    customerState: CustomerReducer,
    orderState: OrderReducer,
    productcategoryState: ProductCategoryReducer,
    productState: ProductReduce,
    orderDetailState : OrderDetailReducer
})

export default rootReducer