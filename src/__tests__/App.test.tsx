import React from 'react';
import { render } from '@testing-library/react';
import App from '../App';

test('renders learn react link', () => {
  const { getByTestId } = render(<App />);
  const appDiv = getByTestId(/app/);
  expect(appDiv).toBeInTheDocument();
});

test('renders GameBoard', () => {
  const { getByTestId } = render(<App />);
  const game = getByTestId(/game-board/);
  expect(game).toBeInTheDocument();
});
