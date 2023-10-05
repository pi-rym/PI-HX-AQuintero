import axios from 'axios';
import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';

import About from './components/About';
import Cards from './components/Cards.jsx';
import Detail from './components/Detail';
import Error from './components/Error';
import Nav from './components/Nav';
import './App.css';

function App() {
  const [characters, setCharacters] = useState([]);
  const APIKEY = 'pi-hx-aquintero';

  const onSearch = (id) => {
    axios(`https://rym2.up.railway.app/api/character/${id}?key=${APIKEY}`)
      .then(({ data }) => {
        if (data.name) {
          setCharacters((oldCharacters) => [...oldCharacters, data]);
        } else {
          window.alert('Personaje no encontrado');
        }
      })
      .catch((error) => console.log(error));
  };

  const onClose = (id) => {
    setCharacters(characters.filter((char) => char.id !== Number(id)));
  };
  return (
    <div className='App'>
      <Nav onSearch={onSearch} />
      <Routes>
        <Route
          path='/home'
          element={<Cards characters={characters} onClose={onClose} />}
        />
        <Route path='/about' element={<About />} />
        <Route path='/detail/:id' element={<Detail />} />
        <Route path='*' element={<Error />} />
      </Routes>
    </div>
  );
}

export default App;
