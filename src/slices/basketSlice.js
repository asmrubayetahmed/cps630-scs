import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    items: [],
};

export const basketSlice = createSlice({
    name: "basket",
    initialState,
    reducers: {
        //Actions
        addToBasket: (state, action) => {
            state.items = [...state.items, action.payload]
        },
        removeFromBasket: (state, action) => {}, 
    },
});

export const { addToBasket, removeFromBasket } = basketSlice.actions;

// Select - This is how we pull information form the Global store slice
export const selectItems = (state) => state.basket.items;

export default basketSlice.reducer;

