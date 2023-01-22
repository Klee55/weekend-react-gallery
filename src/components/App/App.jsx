import React from 'react';
import './App.css';
import axios from 'axios';
import { useEffect, useState } from 'react';

function App() {

  const [galleryList, setGalleryList] = useState([]);

  useEffect( () => {
    fetchGallery();
  }, []);

  const fetchGallery = () => {
    axios({
      method: 'GET',
      url: '/gallery'
    })
    .then((response) => {
      console.log('Response from GET:', response);
      // setGalleryList(response.data)
    })
  }

    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Gallery of My Life</h1>
        </header>
        <p>Gallery goes here</p>
        
        <img src="images/goat_small.jpg"/>
      </div>
    );
}

export default App;
