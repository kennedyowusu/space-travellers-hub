import renderer from 'react-test-renderer';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import '@testing-library/jest-dom';

import Navigation from '../components/Navigation';

describe('Test Navigation Component', () => {
  test('navigation component should match with snapshot', () => {
    const navigation = renderer
      .create(
        <BrowserRouter>
          <Navigation />
        </BrowserRouter>,
      )
      .toJSON();

    expect(navigation).toMatchSnapshot();
  });

  test('navigation component should render correctly', () => {
    render(
      <BrowserRouter>
        <Navigation />
      </BrowserRouter>,
    );

    expect(screen.getByText('Rockets')).toBeInTheDocument();
    expect(screen.getByText('Missions')).toBeInTheDocument();
    expect(screen.getByText('My Profile')).toBeInTheDocument();
  });
});
