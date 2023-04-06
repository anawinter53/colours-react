import React from 'react';
import { describe, expect, beforeEach, afterEach, it } from 'vitest';
import { screen, render, cleanup } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
 
import matchers from '@testing-library/jest-dom/matchers'
expect.extend(matchers)

import ColourItem from '.'

const colourData = [{id: 1, name: "red", hex: '#345E4'}];

describe ('Colour Item component', () => {

    beforeEach(() => {
        render(<ColourItem colourData={colourData} />)
    })

    afterEach(() => {
        cleanup()
    })

    it('Displays heading with appropriate text', () => {

        const heading = screen.getByRole('headingone')

        expect(heading).toBeInTheDocument();
        expect(heading.textContent).toBe(123)
    })

    it('Fills page with colour that is not white', () => {
        const div = screen.getByRole('div');
        expect(div.style.color).not.toBe('white')
    })
})
