import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { reserveRocket, cancelRocket } from '../redux/rockets/rocketsSlice';

const Rocket = ({
  rocketName, description, image, id, reserved,
}) => {
  const dispatch = useDispatch();

  return (
    <div
      style={{
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
        alignItems: 'center',
      }}
    >
      <h1>{rocketName}</h1>
      <img
        src={image}
        alt={rocketName}
        style={{
          width: '200px',
          height: '200px',
          objectFit: 'cover',
        }}
      />
      <p>
        {reserved && (
          <span
            style={{
              backgroundColor: 'teal',
              color: 'white',
              border: 'none',
              padding: '10px',
              borderRadius: '5px',
            }}
          >
            Reserved
          </span>
        )}
        {description}
      </p>

      {reserved ? (
        <button
          type="button"
          onClick={() => dispatch(cancelRocket(id))}
          style={{
            backgroundColor: 'red',
            color: 'white',
            border: 'none',
            padding: '10px',
            borderRadius: '5px',
          }}
        >
          Cancel Reservation
        </button>
      ) : (
        <button
          type="button"
          onClick={() => dispatch(reserveRocket(id))}
          style={{
            backgroundColor: 'green',
            color: 'white',
            border: 'none',
            padding: '10px',
            borderRadius: '5px',
          }}
        >
          Reserve Rocket
        </button>
      )}
    </div>
  );
};

Rocket.propTypes = {
  rocketName: PropTypes.string,
  description: PropTypes.string,
  image: PropTypes.string,
  id: PropTypes.string,
  reserved: PropTypes.bool,
}.isRequired;

export default Rocket;
