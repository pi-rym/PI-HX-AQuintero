import { connect, useDispatch, useSelector } from 'react-redux';
import Card from '../Card/Card';
import { filterCards, orderCards } from '../../redux/actions';
import { useState } from 'react';

const Favorites = () => {
  const [aux, setAux] = useState(false);
  const dispatch = useDispatch();
  const myFavorites = useSelector((state) => state.myFavorites);

  const handleOrder = (e) => {
    dispatch(orderCards(e.target.value));
    setAux(!aux);
  };

  const handleFilter = (e) => {
    dispatch(filterCards(e.target.value));
  };

  return (
    <div>
      <select onChange={handleOrder}>
        <option value='A'>Ascendente</option>
        <option value='D'>Descendente</option>
      </select>
      <select onChange={handleFilter}>
        <option value="All">All Favs</option>
        <option value='Male'>Male</option>
        <option value='Female'>Female</option>
        <option value='Genderless'>Genderless</option>
        <option value='unknown'>Unknown</option>
      </select>
      {myFavorites?.map(
        ({ id, name, status, gender, image, origin, species }) => (
          <Card
            id={id}
            name={name}
            status={status}
            gender={gender}
            image={image}
            origin={origin}
            species={species}
          />
        )
      )}
    </div>
  );
};

export default Favorites;

// export const mapStateToProps = (state) => {
//   return {
//     myFavorites: state.myFavorites,
//   };
// };

// export default connect(mapStateToProps, null)(Favorites);
