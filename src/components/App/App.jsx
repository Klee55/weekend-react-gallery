import React from 'react';
import './App.css';
import axios from 'axios';
import { useEffect, useState } from 'react';
import GalleryList from '../GalleryList/GalleryList';

function App() {

  const [galleryList, setGalleryList] = useState([]);

  // fire off fetchGallery on load
  useEffect(() => {
    fetchGallery();
  }, []);

  const addNewLike = (addNewLikeFunction) => {
    console.log(addNewLikeFunction);
    axios({
      method: 'PUT',
      url: `/gallery/like/${addNewLikeFunction}`
    })
      .then((response) => {
        console.log('response from POST:', response)
        fetchGallery();
      })
      .catch(function (error) {
        console.log('error with like button:', error);
      });
  }

  // GET request to get Gallary array
  const fetchGallery = () => {
    axios({
      method: 'GET',
      url: '/gallery'
    })
      .then((response) => {
        console.log('Response from GET:', response);
        setGalleryList(response.data);
        // console.log(galleryList);
      })
      .catch(function (error) {
        console.log('error with GET:', error);
      });
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1 className="App-title">Gallery of My Life</h1>
      </header>
      <p>Gallery goes here</p>
      <div className="images">
        <GalleryList galleryListProp={galleryList} addNewLikeFunction={addNewLike} />
      </div>
    </div>
  );
}

export default App;
