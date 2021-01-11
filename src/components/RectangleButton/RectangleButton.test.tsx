import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import RectangleButton from './RectangleButton';

describe('<RectangleButton />', () => {
  test('it should mount', () => {
    render(<RectangleButton />);
    
    const rectangleButton = screen.getByTestId('RectangleButton');

    expect(rectangleButton).toBeInTheDocument();
  });
});