import { Link } from 'react-router-dom';

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
    <div>
      <button onClick={() => onClose(id)}>X</button>
      <Link to={`/detail/${id}`}>
        <h2>{name}</h2>
      </Link>
      <img src={image} alt='imagen' />
      <h2>{status}</h2>
      <h2>{species}</h2>
      <h2>{gender}</h2>
      <h2>{origin}</h2>
    </div>
  );
}
