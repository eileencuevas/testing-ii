import React from 'react';
import { render, fireEvent } from 'react-testing-library';
import 'jest-dom/extend-expect';

import Dashboard from '../components/Dashboard';

describe('Dashboard tests', () => {
    it('should display one button each saying Strike, Ball, Foul, Hit', () => {
        const { getByTestId } = render(<Dashboard />);
        const strike = getByTestId('strike-btn');
        const ball = getByTestId('ball-btn');
        const foul = getByTestId('foul-btn');
        const hit = getByTestId('hit-btn');

        expect(strike).toHaveTextContent(/strike/i);
        expect(ball).toHaveTextContent(/ball/i);
        expect(foul).toHaveTextContent(/foul/i);
        expect(hit).toHaveTextContent(/hit/i);
    });
})