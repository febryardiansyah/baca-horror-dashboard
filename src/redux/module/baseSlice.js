import { createSlice } from "@reduxjs/toolkit";
import { readUser } from "../../helpers/storage";
const user = JSON.parse(readUser())
const sideBarIndex = localStorage.getItem('index')

const baseSlice = createSlice({
    name: 'base',
    initialState: {
        user: user || null,
        sideBarIndex: sideBarIndex || 0
    },
    reducers: {
        setUser: (state, { payload }) => {
            state.user = payload

            return
        },
        setSideBarIndex: (state, { payload }) => {
            state.sideBarIndex = payload

            return
        }
    }
})

export const baseActions = baseSlice.actions
export const baseReducers = baseSlice.reducer