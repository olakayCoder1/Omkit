import { ADD_ITEM, INCREASE_ITEM , DECREASE_ITEM , CLEAR_CART } from "../actions/cartActions";

export const fetchCart = () => {
    const cartItems =
      localStorage.getItem("cartItems") !== "undefined"
        ? JSON.parse(localStorage.getItem("cartItems"))
        : localStorage.clear();
  
    return cartItems ? cartItems : [];
  };



const carts = fetchCart()

const initialState = {
    items : carts
}

const cartReducer = ( state = true , action ) => {
    switch(action.type){
        case ADD_ITEM :
            return false
        default:
            return state 
    }
}


export default cartReducer