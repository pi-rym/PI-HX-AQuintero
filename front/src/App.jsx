import axios from 'axios';
import { useState, useEffect } from 'react';
import { Routes, Route, useLocation, useNavigate } from 'react-router-dom';

import About from './components/About';
import Cards from './components/Cards.jsx';
import Detail from './components/Detail';
import Error from './components/Error';
import Form from './components/Form';
import Nav from './components/Nav';
import './App.css';

function App() {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const [access, setAccess] = useState(false);
  const [characters, setCharacters] = useState([]);
  const APIKEY = 'pi-hx-aquintero';
  const EMAIL = 'mail@mail.com';
  const PASSWORD = 'hola123';

  function login(userData) {
    if (userData.password === PASSWORD && userData.email === EMAIL) {
      setAccess(true);
      navigate('/home');
    } else {
      alert('Datos incorrectos. Intenta de nuevo')
    }
  }

  useEffect(() => {
    !access && navigate('/');
  }, [access]);

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
      {pathname !== '/' && <Nav onSearch={onSearch} />}
      <Routes>
        <Route path='/' element={<Form login={login} />} />
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
