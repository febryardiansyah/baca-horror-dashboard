import { createSlice } from "@reduxjs/toolkit";
import { readUser } from "../../helpers/storage";
const user = readUser()

const baseSlice = createSlice({
    name: 'user',
    initialState: {
        user: user || {}
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