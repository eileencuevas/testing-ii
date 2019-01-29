import React from 'react';
import { render, fireEvent, cleanup } from 'react-testing-library';
import 'jest-dom/extend-expect';

import Display from '../components/Display';

describe('Display Tests', () => {
    // should have balls incremented when ball button hit
    // should reset when hit button hit

    afterEach(cleanup);

    it('should display number of balls and strikes', () => {
        const { getByTestId } = render(<Display />);

        const strikes = getByTestId('strike-count');
        const balls = getByTestId('ball-count');

        expect(strikes).toHaveTextContent(0);
        expect(balls).toHaveTextContent(0);
    })

    it('should have strikes incremented when strike button is pressed', () => {
        const { getByTestId } = render(<Display />);
        const strikes = getByTestId('strike-count');
        const strikeBtn = getByTestId('strike-btn');

        fireEvent.click(strikeBtn);

        expect(strikes).toHaveTextContent(1);

    })

    it('should reset when strike button is pressed 4 times', () => {
        const { getByTestId } = render(<Display />);
        const strikes = getByTestId('strike-count');
        const strikeBtn = getByTestId('strike-btn');

        fireEvent.click(strikeBtn);
        fireEvent.click(strikeBtn);
        fireEvent.click(strikeBtn);

        expect(strikes).toHaveTextContent(0);

    })

    it('should have strikes incremented when foul button is pressed', () => {
        const { getByTestId } = render(<Display />);

        const strikes = getByTestId('strike-count');
        const foulBtn = getByTestId('foul-btn');

        fireEvent.click(foulBtn);

        expect(strikes).toHaveTextContent(1);

    })

    it('should not have strikes incremented past 2 when foul button is pressed', () => {
        const { getByTestId } = render(<Display />);

        const strikes = getByTestId('strike-count');
        const foulBtn = getByTestId('foul-btn');

        fireEvent.click(foulBtn);
        fireEvent.click(foulBtn);
        fireEvent.click(foulBtn);

        expect(strikes).toHaveTextContent(2);

    })

    it('should have ball count incremented when ball button is pressed', () => {
        const { getByTestId } = render(<Display />);
        const balls = getByTestId('ball-count');
        const ballBtn = getByTestId('ball-btn');

        fireEvent.click(ballBtn);

        expect(balls).toHaveTextContent(1);
    })

    it('should have ball count reset when ball button is pressed after 3 balls', () => {
        const { getByTestId } = render(<Display />);
        const balls = getByTestId('ball-count');
        const ballBtn = getByTestId('ball-btn');

        fireEvent.click(ballBtn);
        fireEvent.click(ballBtn);
        fireEvent.click(ballBtn);
        fireEvent.click(ballBtn);

        expect(balls).toHaveTextContent(0);
    })

    it('should have ball count and strikes reset when hit button is pressed', () => {
        const { getByTestId } = render(<Display />);
        const balls = getByTestId('ball-count');
        const strikes = getByTestId('strike-count');
        const hitBtn = getByTestId('hit-btn');

        fireEvent.click(hitBtn);

        expect(balls).toHaveTextContent(0);
        expect(strikes).toHaveTextContent(0);
    })
})