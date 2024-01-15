import { createSlice } from "@reduxjs/toolkit";
import { PayloadAction } from "@reduxjs/toolkit";

export type CounterState = {
    value: number
};

const initialState: CounterState = {
    value: 0
};

const CounterSlice = createSlice({
    name: "counter",
    initialState: initialState,
    reducers: {
        increment: (state) => {
            state.value += 1
        },
        decrement: (state) => {
            state.value -= 1
        },
        incrementByAmount: 
        (state, action: PayloadAction<number>) => {
            state.value += action.payload
        }
    }
});

export const Actions = CounterSlice.actions;
export const CReducer = CounterSlice.reducer;


