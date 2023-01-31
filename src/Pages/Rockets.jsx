import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchRockets } from '../redux/rockets/rocketsSlice';

const Rockets = () => {
  const dispatch = useDispatch();
  const rocketData = useSelector((state) => state.rockets.rockets);

  rocketData.sort((a, b) => a.rocketName.localeCompare(b.rocketName));

  useEffect(() => {
    if (rocketData.length === 0) {
      dispatch(fetchRockets());
    }
  }, [dispatch, rocketData]);

  return (
    <div style={{
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'space-around',
      alignItems: 'center',
    }}
    >
      {rocketData.map((rocket) => (
        <div key={rocket.id}>
          <h2>{rocket.rocketName}</h2>
          <p>{rocket.description}</p>
          <img src={rocket.images[0]} alt={rocket.rocketName} />
        </div>
      ))}
    </div>
  );
};

export default Rockets;
