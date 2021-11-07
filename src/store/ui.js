import { createSlice } from "@reduxjs/toolkit";

// UI manipulation reducer
const uiSlice = createSlice({
    name: 'ui',
    initialState: {
        albumId: undefined,
        showAlbum: false,
    },
    reducers: {
        setAlbumId(state, action) {
            state.albumId = action.payload;
        },
        isAlbumSelected(state) {
            state.showAlbum = true;
        },
    },
});

export const uiActions = uiSlice.actions;

export default uiSlice.reducer;