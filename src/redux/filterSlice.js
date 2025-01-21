import { createSlice } from "@reduxjs/toolkit";

const filtersInitialState = {
    name: "",
};

const filtersSlice = createSlice({
    name: "filters",
    initialState: filtersInitialState,
    reducers: {
        setFilters(state, action) {
            state.name = action.payload;
        },
    },
});

export const { setFilters } = filtersSlice.actions;
export const filtersReducer = filtersSlice.reducer;