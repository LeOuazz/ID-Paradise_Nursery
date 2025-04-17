// store/CartSlice.ts
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface Plant {
    name: string;
    image: string;
    description: string;
    cost: number;
    categories: string[];
}

export interface CartItem extends Plant {
    quantity: number;
}

interface CartState {
    cart: CartItem[];
}

const initialState: CartState = {
    cart: [],
};

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addItem: (state, action: PayloadAction<Plant>) => {
            const existingItem = state.cart.find(item => item.name === action.payload.name);
            if (existingItem) {
                existingItem.quantity += 1;
            } else {
                state.cart.push({ ...action.payload, quantity: 1 });
            }
        },
        removeItem: (state, action: PayloadAction<string>) => {
            state.cart = state.cart.filter(item => item.name !== action.payload);
        },
        updateQuantity: (
            state,
            action: PayloadAction<{ name: string; quantity: number }>
        ) => {
            const { name, quantity } = action.payload;
            const item = state.cart.find(item => item.name === name);
            if (item) {
                item.quantity = quantity;
            }
        },
    },
});

export const { addItem, removeItem, updateQuantity } = cartSlice.actions;
export default cartSlice.reducer;
