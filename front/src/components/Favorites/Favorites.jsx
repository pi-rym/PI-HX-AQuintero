import { connect } from 'react-redux';
import Card from '../Card/Card';

export const Favorites = ({ myFavorites }) => {
  return (
    <div>
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

export const mapStateToProps = (state) => {
  return {
    myFavorites: state.myFavorites,
  };
};

export default connect(mapStateToProps, null)(Favorites);
