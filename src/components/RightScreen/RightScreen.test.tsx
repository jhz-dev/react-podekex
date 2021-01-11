import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import RightScreen from './RightScreen';

describe('<RightScreen />', () => {
  test('it should mount', () => {
    render(<RightScreen />);
    
    const rightScreen = screen.getByTestId('RightScreen');

    expect(rightScreen).toBeInTheDocument();
  });
});