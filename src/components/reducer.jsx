export const getBasketTotal = (cart)=>
cart?.reduce((amount , item) => item.price + amount,0);

export  const initialState = {
    cart: [],
    user: null 
};

const reducer = (state , action) => {
    
    console.log(action , state);
    switch (action.type) {
        case "ADD_TO_CART":
            // logic to add item in the basket
            return {
            ...state,
                cart: [...state.cart , action.item]
            }
        case "REMOVE_FROM_CART":
            // logic to remove item in the basket  
            let newCart = [...state.cart];
            const index = state.cart.findIndex((cartItem)=>cartItem.id === action.id);
                //remove items
                newCart.splice(index , 1);
                console.log(newCart);
            return {...state , cart: newCart };
        default:
        return state ;
        }
};
export default reducer;