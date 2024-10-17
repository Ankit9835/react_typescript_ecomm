import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import {type CartItem, type CartState} from "@/utils"
import { toast } from '@/components/ui/use-toast';


const defaultState: CartState = {
    cartItems:[],
    numItemsInCart: 0,
    cartTotal: 0,
    shipping: 500,
    tax: 0,
    orderTotal: 0,
};

const getCartFromLocalStorage = (): CartState => {
    const cart = localStorage.getItem('cart')
    return cart? JSON.parse(cart) : defaultState
}
const cartSlice = createSlice({
  name: 'cart',
  initialState: getCartFromLocalStorage(),
  reducers: {
    addItem: (state, action: PayloadAction<CartItem>) => {
        const newCartitem = action.payload
        const item = state.cartItems.find((i) => i.cartID === newCartitem.id)
        if(item){
          item.amount += newCartitem.amount
        } else {
          state.cartItems.push(newCartitem)
        }
        state.numItemsInCart += newCartitem.amount
        state.cartTotal += Number(newCartitem.price) * newCartitem.amount;
          // state.tax = 0.1 * state.cartTotal;
          // state.orderTotal = state.cartTotal + state.shipping + state.tax;
          // localStorage.setItem('cart', JSON.stringify(state));
          cartSlice.caseReducers.calculateTotals(state);
          toast({ description: 'Item added to cart' });
    },
    clearCart: () => {

    },
    removeItem: () => {

    },
    editItem: () => {

    },
    calculateTotals: (state) => {
        state.tax = 0.1 * state.cartTotal;
        state.orderTotal = state.cartTotal + state.shipping + state.tax;
        localStorage.setItem('cart', JSON.stringify(state));
    }
  },
});

export const { addItem, clearCart, removeItem, editItem } = cartSlice.actions;
export default cartSlice.reducer;