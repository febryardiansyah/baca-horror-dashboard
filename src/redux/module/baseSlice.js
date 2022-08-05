import { createSlice } from "@reduxjs/toolkit";
import { readUser } from "../../helpers/storage";
const user = JSON.parse(readUser())

const baseSlice = createSlice({
    name: 'base',
    initialState: {
        user: user || null
    },
    reducers: {
        setUser: (state, { payload }) => {
            state.user = payload

            return
        }
    }
})

export const baseActions = baseSlice.actions
export const baseReducers = baseSlice.reducer