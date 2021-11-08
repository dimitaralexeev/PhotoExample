import { createSlice } from '@reduxjs/toolkit';

// API response reducer
const responseSlice = createSlice({
    name: 'response',
    initialState: {
        response: [],
    },
    reducers: {
        setResponse(state, action) {
            state.response = action.payload;
        },
    },
});

export const responseActions = responseSlice.actions;

export default responseSlice.reducer;