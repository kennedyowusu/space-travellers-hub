import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import configureStore from '../redux/configureStore';
import AppLayout from '../components/Applayout';

describe('Test AppLayout Component', () => {
  test('AppLayout component should render correctly', () => {
    render(
      <Provider store={configureStore}>
        <BrowserRouter>
          <AppLayout />
        </BrowserRouter>
      </Provider>,
    );
  });
});
