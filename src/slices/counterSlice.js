// payload is the argument you pass when dispatching an action, 
// and it's accessed inside the reducer function through action.payload.

// counterSlice.actions allows us to dispatch actions easily.
// action : { type: "counter/incrementByAmount", payload: 5 }

// counterSlice.reducer is used by the Redux store to update state
//  when an action is dispatched.

// You export only the reducer, NOT the entire slice

import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    value : 0,
}

const counterSlice = createSlice({
    name : "counter",
    initialState,
    reducers : {
        increment : (state, action)=>{
            state.value = state.value+1;
        },
        decrement : (state, action)=>{
            state.value = state.value-1;
        },
        reset : (state, action)=>{
            state.value = 0;
        },
        incrementByAmount : (state, action)=>{
            state.value = state.value + action.payload
        }
    }
})

export const {increment, decrement, reset, incrementByAmount} = counterSlice.actions;

export default counterSlice.reducer;