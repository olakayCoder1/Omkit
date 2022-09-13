import authenticationReducer from "./authenticationReducer";
import cartReducer from "./cartReducer";
import { combineReducers } from "redux";





const allReducers = combineReducers({
    authenticationReducer,
    cartReducer
})


export default allReducers