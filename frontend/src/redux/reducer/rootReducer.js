import { combineReducers } from "redux";
import { userReducer } from "./userReducer";
import { productReducer } from "./productReducer";
import { cartReducer } from "./cartReducer";
import { orderReducer } from "./orderReducer";

export const rootReducer = combineReducers({
    userReducer : userReducer,
    productReducer : productReducer,
    cartReducer : cartReducer,
    orderReducer : orderReducer,
})