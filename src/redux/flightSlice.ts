import { createSlice } from "@reduxjs/toolkit";
import data from '../data-2.json'

const flightSlice = createSlice({
    name: "flights",
    initialState: data,
    reducers: {}
})

export default flightSlice.reducer