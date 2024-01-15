import { configureStore } from "@reduxjs/toolkit";
import { CReducer } from "./CounterSlice";

export const MakeStore = () => {
    return configureStore({
        reducer: {
            counter: CReducer
        },
    });
};

export type AppStore = ReturnType<typeof MakeStore>;
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];


