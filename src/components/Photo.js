import { useDispatch, useSelector } from "react-redux";
import { albumActions } from "../store/album";

const Photo = (props) => {
    const dispatch = useDispatch();
    const photos = useSelector(state => state.response.response);
    const favorites = useSelector(state => state.album.favoritesAlbum);

    const addToFavoritesHandler = (event) => {
        event.preventDefault();
        const generatedPhoto = photos.find(photo => photo.id === parseInt(event.target.id));

        dispatch(albumActions.addToFavorites(generatedPhoto));
    };

    const removeFromFavorites = (event) => {
        const generatedPhoto = favorites.find(photo => photo.id === parseInt(event.target.id));
        const indexOfPhoto = favorites.indexOf(generatedPhoto);

        dispatch(albumActions.removeFromFavorites(indexOfPhoto));
    };
    
    return (
        <div className="col-2 d-flex flex-column border rounded m-2">
            <div className="container m-2">
                <div>
                    <img className="img-fluid" src={props.photo.url} alt="" />
                    <h5>{props.photo.title}</h5>
                    {props.displayFavorites && <button
                        className="btn btn-success"
                        id={props.photo.id}
                        onClick={addToFavoritesHandler}
                        disabled={props.isAddedtoFavorites ? true : false}
                    >Add to favourites</button>}
                    {!props.displayFavorites && <button
                        className="btn btn-danger"
                        id={props.photo.id}
                        onClick={removeFromFavorites}
                    >Remove from favorites</button>}
                </div>
            </div>
        </div>
    );
};

export default Photo;