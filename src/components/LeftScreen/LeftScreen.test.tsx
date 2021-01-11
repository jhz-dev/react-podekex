import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import LeftScreen from './LeftScreen';

describe('<LeftScreen />', () => {
  test('it should mount', () => {
    render(<LeftScreen />);
    
    const leftScreen = screen.getByTestId('LeftScreen');

    expect(leftScreen).toBeInTheDocument();
  });
});