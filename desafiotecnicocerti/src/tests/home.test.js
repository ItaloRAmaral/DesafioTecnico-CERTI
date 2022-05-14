import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from '../App';
import renderWithRouter from '../helper/renderWithRouter';

describe('Testando a pagina <Header />', () => {
    it('Verifica se renderiza os links Home, Pilots e Starships',() => {
        renderWithRouter(<App />)
    });
})