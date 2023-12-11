import axios from 'axios';
import { useState, useEffect, useMemo } from 'react';
import { Routes, Route, useLocation, useNavigate } from 'react-router-dom';

import About from './components/About/About';
import Cards from './components/Cards/Cards.jsx';
import Detail from './components/Detail/Detail';
import Error from './components/Error/Error';
import Form from './components/Form/Form';
import Nav from './components/Nav/Nav';
import Favorites from './components/Favorites/Favorites';

function App() {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const [access, setAccess] = useState(false);
  const [characters, setCharacters] = useState([]);
  const APIKEY = 'pi-hx-aquintero';
  // const EMAIL = 'mail@mail.com';
  // const PASSWORD = 'hola123';
  const URL = 'http://localhost:3001/rickandmorty/';

  async function login({ email, password }) {
    try {
      const { data } = await axios(
        `${URL}login?email=${email}&password=${password}`
      );

      const { access } = data;

      setAccess(access);
      access && navigate('/home');
    } catch ({ response }) {
      // console.log(error);
      const { data } = response;
      alert(data.message);
    }
  }

  function logout() {
    setAccess(false);
    navigate('/');
  }

  useEffect(() => {
    !access && navigate('/');
  }, [access]);

  const onSearch = async (id) => {
    try {
      const { data } = await axios(`${URL}character/${id}`);
      if (data.name) {
        setCharacters((oldCharacters) => [...oldCharacters, data]);
      } else {
        window.alert('Personaje no encontrado');
      }
    } catch (error) {
      // console.log(error);
      alert(error.response.data);
    }
  };

  const onClose = (id) => {
    setCharacters(characters.filter((char) => Number(char.id) !== Number(id)));
  };

  return (
    <div className='App'>
      {pathname !== '/' && <Nav onSearch={onSearch} logout={logout} />}
      <Routes>
        <Route path='/' element={<Form login={login} />} />
        <Route
          path='/home'
          element={<Cards characters={characters} onClose={onClose} />}
        />
        <Route path='/about' element={<About />} />
        <Route path='/favorites' element={<Favorites />} />
        <Route path='/detail/:id' element={<Detail />} />
        <Route path='*' element={<Error />} />
      </Routes>
    </div>
  );
}

export default App;
