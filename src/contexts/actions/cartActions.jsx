export const ADD_ITEM = 'ADD_ITEM'
export const INCREASE_ITEM = 'INCREASE_ITEM'
export const DECREASE_ITEM = 'DECREASE_ITEM'
export const CLEAR_CART = 'CLEAR_CART'


export const addItem = () => {
    return {
        type : ADD_ITEM
    }
}

export const increaseItem = () => {
    return {
        type : INCREASE_ITEM 
    }
}

export const decreaseItem = () => {
    return {
        type : DECREASE_ITEM
    }
}

export const clearCart = () => {
    return {
        type : CLEAR_CART
    }
}