import { createSlice, nanoid } from "@reduxjs/toolkit";

const contactInitialState = {
    items: [],
};


const contactSlice = createSlice({
    name: "contacts",
    initialState: contactInitialState,
    reducers: {
        addContact: {
            reducer(state, action) {
                state.items.push(action.payload);
            },
            prepare({ name, number }) {
                return {
                    payload: {
                        id: nanoid(),
                        name,
                        number,
                    },
                };
            },
        },









    },
});