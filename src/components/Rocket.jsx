import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { reserveRocket, cancelRocket } from '../redux/rockets/rocketsSlice';

const Rocket = ({
  rocketName, description, image, id, reserved,
}) => {
  const dispatch = useDispatch();

  return (
    <div className="rocket">
      <img src={image} alt={rocketName} className="rocket-image" />
      <div className="content">
        <h1 className="rocket-name">{rocketName}</h1>

        <p
          className="rocket-description"
        >
          {reserved && (
            <span
              className="reserved"
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
            className="cancel"
          >
            Cancel Reservation
          </button>
        ) : (
          <button
            type="button"
            onClick={() => dispatch(reserveRocket(id))}
            className="reserve"
          >
            Reserve Rocket
          </button>
        )}
      </div>
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
