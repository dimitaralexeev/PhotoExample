import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';

import Albums from './components/Albums.js';
import Header from './components/Header.js';
import MainPart from './components/MainPart.js';
import LoadingBar from './components/LoadingBar.js';
import { responseActions } from './store/response.js';

function App() {
  const [photos, setPhotos] = useState([]);
  const [isLoading, setIsloading] = useState(true);

  const isSelected = useSelector(state => state.ui.showAlbum);
  const dispatch = useDispatch();

  useEffect(() => {
    // Fetching photos async function and set the response in the store
    const fetchPhotos = async () => {
      const response = await fetch('https://jsonplaceholder.typicode.com/photos');

      if (!response.ok) {
        alert("Something went wrong with the response!")
      }

      const data = await response.json();

      setPhotos(data.map(photo => photo));
      setIsloading(false);
    };

    fetchPhotos().catch((error) => {
      setIsloading(false);
    });

  }, []);

  if (isLoading) {
    return (
      <section>
        <LoadingBar />
      </section>
    );
  };

  dispatch(responseActions.setResponse(photos));

  return (
    <div className="App">
      <Header />
      <MainPart />
      {isSelected && <Albums />}
    </div>
  );
};

export default App;
