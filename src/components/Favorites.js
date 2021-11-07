import { useDispatch, useSelector } from "react-redux";
import { uiActions } from "../store/ui";

const Favorites = () => {

    const getFavorites = useSelector(state => state.album.favoritesAlbum);
    
    const dispatch = useDispatch();

    const getFavoritesHandler = (event) => {
        event.preventDefault();
        
        dispatch(uiActions.isAlbumSelected());
        dispatch(uiActions.setAlbumId(0));
    };

    return (
        <div className="col-sm-4 text-center my-3 d-flex flex-column">
            <div>
                <label>
                    <h3>You have {getFavorites.length} favorites photos</h3>
                </label>
            </div>
            <div>
                <button
                    className="btn btn-success"
                    onClick={getFavoritesHandler}
                    disabled={getFavorites.length === 0 && true}
                >Get favorites</button>
            </div>
        </div>
    );
};

export default Favorites;