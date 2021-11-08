import { createSlice } from '@reduxjs/toolkit';

// Favorites album reducer 
const albumSlice = createSlice({
    name: 'album',
    initialState: {
        favoritesAlbum: []
    },
    reducers: {
        addToFavorites(state, action) {
            state.favoritesAlbum.push(action.payload);
        },
        removeFromFavorites(state, action) {
            if (action.payload > -1) {
                state.favoritesAlbum.splice(action.payload, 1);
            }
        }
    }
});

export const albumActions = albumSlice.actions;

export default albumSlice.reducer;