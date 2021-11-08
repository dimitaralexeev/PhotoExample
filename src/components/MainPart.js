import React from "react";
import { useSelector } from "react-redux";

import AlbumSelector from "./AlbumSelector";
import Favorites from "./Favorites";

const MainPart = () => {
    const photos = useSelector(state => state.response.response);

    const getAlbumsId = albumsId(photos);

    // Check every photo's album id and add this id into a new array to send albums in the AlbumSelector component. Also call Favorites component, when the use wants to see it.
    function albumsId(data) {
        if (data.length === 0) {
            return [];
        }

        let id = data[0].albumId;
        const resultArray = [];

        resultArray.push(id);

        for (let item in data) {

            if (data[item].albumId !== id) {
                resultArray.push(data[item].albumId);
                id = data[item].albumId;
            }
        }

        return resultArray;
    }

    return (
        <div className="container text-dark">
            <div className="row d-flex align-item-center justify-content-between">
                <AlbumSelector albums={getAlbumsId} />
                <Favorites />
            </div>
        </div>
    );
};

export default MainPart;