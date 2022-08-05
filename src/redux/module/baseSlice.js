import { createSlice } from "@reduxjs/toolkit";

const baseSlice = createSlice({
    name: 'user',
    initialState: {
        user: {}
    },
    reducers: {
        setUser: (state,{payload}) => {
            state.user = payload

            return
        }
    }
})

export const baseActions = baseSlice.actions
export const baseReducers = baseSlice.reducer