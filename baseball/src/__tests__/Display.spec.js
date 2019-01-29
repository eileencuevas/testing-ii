import React from 'react';
import { render, fireEvent } from 'react-testing-library';
import 'jest-dom/extend-expect';

import Display from '../components/Display';

describe('Display Tests', () => {
    // should display balls and strikes
    // should have strikes incremented when strike, foul button hit
    // should have balls incremented when ball button hit
    // should reset when hit button hit
    it('should display number of balls and strikes', () => {
        const { getByTestId } = render(<Display />);

        const strikes = getByTestId('strike-count');
        const balls = getByTestId('ball-count');

        expect(strikes).toHaveTextContent(0);
        expect(balls).toHaveTextContent(0);
    })
})