import { configureStore } from "@reduxjs/toolkit";
import counterSliceReducer from "../slices/counterSlice";

/**
 * counterSlice is the slice object, but you are exporting only the reducer (counterSlice.reducer).
 * When importing this in store.js, you can name it anything you want.
*/
// You can name this import anything (counterSliceReducer)

const store = configureStore({
    reducer:{
        counter : counterSliceReducer,
    },
})

export default store;