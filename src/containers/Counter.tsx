"use client";
import React from "react";
import { useAppSelector, useAppDispatch } from "../lib/Hooks";
import { Actions } from "../lib/CounterSlice";

export const Counter = () => {
    const dispatch = useAppDispatch();
    const count = useAppSelector((state) => state.counter.value);

    return (
        <React.Fragment>
            <section>
                <button
                    onClick={() => dispatch(Actions.increment())}
                >
                    Increment
                </button>
                <span>{count}</span>
                <button
                    onClick={() => dispatch(Actions.decrement())}
                >
                    Decrement
                </button>
            </section>
        </React.Fragment>
    );
};


