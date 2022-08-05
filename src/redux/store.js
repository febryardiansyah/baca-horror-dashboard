import { configureStore } from "@reduxjs/toolkit";
import { baseReducers } from "./module/baseSlice";

export default configureStore({
    reducer: {
        base: baseReducers,
    },
    devTools: true,
})