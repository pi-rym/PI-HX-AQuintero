import './App.css';
import Cards from './components/Cards.jsx';
import Nav from './components/Nav';
import { useState } from 'react';
import axios from 'axios';

function App() {
  // React.useState()

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
      <hr />
      <Cards characters={characters} onClose={onClose} />
      <hr />
    </div>
  );
}

export default App;
