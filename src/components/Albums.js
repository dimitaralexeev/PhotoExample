import { useSelector } from 'react-redux';

import Photo from './Photo';

// Album component 
const Albums = () => {

    const id = useSelector(state => state.ui.albumId);
    const favorites = useSelector(state => state.album.favoritesAlbum);
    const favoritesbyId = useSelector(state => state.album.favoritesAlbum).map(photo => photo.id);
    const response = useSelector(state => state.response.response);

    const getAlbumById = response.filter(photo => {

        return photo.albumId === parseInt(id);
    });

    return (
        <div className="container bg-light border rounded mt-3">
            <div className="row">
                {id !== 0 && getAlbumById.map(photo => {
                    if (favoritesbyId.includes(photo.id)) {
                        return (
                            <Photo photo={photo} key={photo.id} isAddedtoFavorites={true} displayFavorites={true} />
                        )
                    }
                    return (
                        <Photo photo={photo} key={photo.id} isAddedtoFavorites={false} displayFavorites={true} />
                    )

                })}
                {id === 0 && favorites.map(photo => (
                    <Photo photo={photo} key={photo.id} showNotAddedToFavorites={false} />
                ))}
            </div>
        </div>
    );
};

export default Albums;