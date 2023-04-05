import React from 'react';
import { describe, expect, beforeEach, afterEach, it } from 'vitest';
import { screen, render, cleanup } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom'
import userEvent from '@testing-library/user-event'
 
import matchers from '@testing-library/jest-dom/matchers'
expect.extend(matchers)

import Nav from '.'

describe('Nav bar', () => {
    beforeEach(() => {
        render(<BrowserRouter><Nav /></BrowserRouter>)
    })

    afterEach(() => {
        cleanup()
    })

    it('Displays a nav bar with 3 links', () => {
        // select nav from document
        const nav = screen.getByRole('navigation')

        // check whether or not it's in document
        expect(nav).toBeInTheDocument();

        // check whether or not it has two links
        expect(nav.childNodes.length).toBe(2)
    })


    it('Changes location when a navlink is clicked', async () => {
        expect(window.location.href).not.toContain('/about');
        const about = screen.getByText('About');
        await userEvent.click(about)
        expect(window.location.href).toContain('/about');


        const colours = screen.getByText('Colours');
        await userEvent.click(colours)
        expect(window.location.href).toContain('/colours');
        
    })



})
