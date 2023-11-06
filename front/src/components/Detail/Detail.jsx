import React from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import styles from './Detail.module.css';

function Detail() {
  const APIKEY = 'pi-hx-aquintero';
  const { id } = useParams();
  const [character, setCharacter] = useState({});

  useEffect(() => {
    axios(`http://localhost:3001/rickandmorty/character/${id}`).then(
      ({ data }) => {
        if (data.name) {
          setCharacter(data);
          // console.log(data);
        } else {
          window.alert('No hay personajes con ese ID');
        }
      }
    );
    return setCharacter({});
  }, [id]);

  return (
    <div className={styles.container}>
      {character.name && (
        <>
          <div className={styles.personcontainer}>
            <h1>{character.name}</h1>
            <img
              className={styles.imagen}
              src={character.image}
              alt={`${character.name}`}
            />
            <div className={styles.info}>
              <h2>STATUS: {character.status}</h2>
              <h2>SPECIES: {character.species}</h2>
              <h2>GENDER: {character.gender}</h2>
              <h2>ORIGIN: {character.origin?.name}</h2>
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default Detail;
