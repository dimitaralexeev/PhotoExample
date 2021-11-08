import React from "react";
import { useDispatch, useSelector } from "react-redux";

import { uiActions } from "../store/ui";

// Album component selector
const AlbumSelector = (props) => {
    const dispatch = useDispatch();
    const id = useSelector(state => state.ui.albumId);

    const selectorHandler = (event) => {
        event.preventDefault();
        
        dispatch(uiActions.isAlbumSelected());
        dispatch(uiActions.setAlbumId(event.target.value));
    };

    return (
        <div className="col-sm-4 text-center my-3 d-flex flex-column">
            <label>
                <h3>List of albums</h3>
            </label>
            <select className="form-control" value={id === 0 ? "Choose album" : id} onChange={selectorHandler} defaultValue="Choose album" style={{ cursor: 'pointer' }}>
                <option value="Choose album" disabled>Choose album</option>
                {props.albums.map(album => (
                    <option key={album} value={album}>Album {album}</option>
                ))}
            </select>
        </div>
    );
}

export default AlbumSelector;