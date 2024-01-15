"use client";
import React from "react";
import { Provider } from "react-redux";
import { MakeStore, AppStore } from "../lib/store";

type CHI = {
    children: React.ReactNode
};

export default function StoreProvider({children}: CHI) {
    const storeRef = React.useRef<AppStore>();
    if (!storeRef.current) {
        storeRef.current = MakeStore();
    };
    return (
        <Provider store={storeRef.current}>
            {children}
        </Provider>
    );
};


