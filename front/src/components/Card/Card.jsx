import { Link } from 'react-router-dom';
import styles from './Card.module.css';

export default function Card({
  onClose,
  name,
  status,
  species,
  gender,
  origin,
  image,
  id,
}) {
  return (
    <div className={styles.tarjeta}>
      <div className={styles.botones}>
        <button className={styles.boton} onClick={() => onClose(id)}>
          X
        </button>
      </div>
      <img className={styles.image} src={image} alt='imagen' />
      <Link to={`/detail/${id}`}>
        <h3 className={styles.name}>{name}</h3>
      </Link>
      <div>
        <div className={styles.text}>
          <div>
            <h3>STATUS: {status}</h3>
            <h3>SPECIES: {species}</h3>
            <h3>GENDER: {gender}</h3>
            <h3>ORIGIN: {origin}</h3>
          </div>
        </div>
      </div>
    </div>
  );
}
