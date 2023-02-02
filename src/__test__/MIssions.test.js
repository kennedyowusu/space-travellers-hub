import React from 'react';
import { Provider } from 'react-redux';
import renderer from 'react-test-renderer';
import configureStore from '../redux/configureStore';
import Missions from '../components/Mission';

describe('Test Missions Component', () => {
  test('rockets component should match with snapshot', () => {
    const rockets = renderer
      .create(
        <Provider store={configureStore}>
          <Missions />
        </Provider>,
      )
      .toJSON();

    expect(rockets).toMatchSnapshot();
  });
});
