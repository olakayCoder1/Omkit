import { fetchCart, fetchUser } from "../utils/fetchLocalStorageData";





export const fetchUser = () => {
  const userInfo =
    localStorage.getItem("user") !== "undefined"
      ? JSON.parse(localStorage.getItem("user"))
      : localStorage.clear();

      return (
        {
          id : 1,
          'username':'olakay',
          'email':'olakay@gmail.com'
        }
      );
      // return userInfo;
};


export const fetchCart = () => {
  const cartInfo =
    localStorage.getItem("cartItems") !== "undefined"
      ? JSON.parse(localStorage.getItem("cartItems"))
      : localStorage.clear();

  return  [];
  // return cartInfo ? cartInfo : [];
};


const userInfo = fetchUser();
const cartInfo = fetchCart();

export const initialState = {
  user: userInfo,
  foodItems: null,
  cartShow: false,
  cartItems: cartInfo,
};
