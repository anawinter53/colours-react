import React from 'react';
import { describe, expect, beforeEach, afterEach, it } from 'vitest';
import { screen, render, cleanup } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
 
import matchers from '@testing-library/jest-dom/matchers'
expect.extend(matchers)

import ColourPage from '.'

describe ('Colour Item component', () => {
    beforeEach(() => {
        render(<ColourPage />)
    })

    afterEach(() => {
        cleanup()
    })

    it('Displays heading with appropriate text', () => {
        const heading = screen.getByRole('heading')
        expect(heading).toBeInTheDocument();
        expect(heading.textContent).toBe("Colours Page")
    })
})
