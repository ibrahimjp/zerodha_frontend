import React from 'react';
import {render , screen} from '@testing-library/react';
import "@testing-library/jest-dom/extend-expect";
import Hero from "../landing_page/home/Hero";


//test suit
describe("Hero", () => {
    test('render Hero image', () => { 
        render(<Hero />);
        const image = screen.getByAltText('Hero Image');
        expect(image).toBeInTheDocument();
        expect(image).toHaveAttribute('src', 'media/images/homeHero.png');
     })
})