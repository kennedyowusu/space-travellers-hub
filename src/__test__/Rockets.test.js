import React from 'react';
import { Provider } from 'react-redux';
import renderer from 'react-test-renderer';
import configureStore from '../redux/configureStore';
import Rockets from '../components/Rocket';

describe('Test Rockets Component', () => {
  test('rockets component should match with snapshot', () => {
    const rockets = renderer
      .create(

        <Provider store={configureStore}>
          <Rockets />
        </Provider>,

      )
      .toJSON();

    expect(rockets).toMatchSnapshot();
  });
});
