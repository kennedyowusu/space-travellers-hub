import React from 'react';
import PropTypes, { useDispatch } from 'react-redux';

const Rocket = ({
  rocketName, description, image, id,
}) => {
  const dispatch = useDispatch();

  return (
    <div>
      <h1>{rocketName}</h1>
      <p>{description}</p>
      <img src={image} alt={rocketName} />
      <button
        type="button"
        // onClick={() => dispatch(reserveRocket(id))}
        onClick={() => dispatch({ type: 'RESERVE_ROCKET', payload: id })}
        style={{
          backgroundColor: 'blue',
          color: 'white',
          padding: '10px',
          borderRadius: '5px',
          border: 'none',
          cursor: 'pointer',
        }}
      >
        Reserve Rocket
      </button>
    </div>
  );
};

Rocket.propTypes = {
  rocketName: PropTypes.string,
  description: PropTypes.string,
  image: PropTypes.arrayOf(PropTypes.string),
  id: PropTypes.string,
}.isRequired;

export default Rocket;
