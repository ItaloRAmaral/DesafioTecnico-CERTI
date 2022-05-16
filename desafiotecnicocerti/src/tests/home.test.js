import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from '../App';
import renderWithRouter from '../helper/renderWithRouter';

describe('Testando a pagina <Home />', () => {
    it('Verifica se renderiza os links Home, Pilots e Starships', () => {
        renderWithRouter(<App />)

        const homeLink = screen.getByTestId('Home-link');
        expect(homeLink).toBeInTheDocument();

        const pilotsLink = screen.getByTestId('Pilots-link');
        expect(pilotsLink).toBeInTheDocument();

        const starshipsLink = screen.getByTestId('Starships-link');
        expect(starshipsLink).toBeInTheDocument();
    });

    it('Verifica se renderiza os botoes Pilots e Starships',() => {
        renderWithRouter(<App />)

        const pilotsbtn = screen.getByRole('button', {name: 'Pilots'})
        expect(pilotsbtn).toBeInTheDocument();

        const starshipsbtn = screen.getByRole('button', {name: 'Starships'})
        expect(starshipsbtn).toBeInTheDocument();
    });

    it('Verifica se ao clicar no botão PILOTS a pagina é redirecionada',() => {
        renderWithRouter(<App />)

        const pilotsbtn = screen.getByRole('button', {name: 'Pilots'})
        expect(pilotsbtn).toBeInTheDocument();

        userEvent.click(pilotsbtn);

        const titleEl = screen.getByRole('heading', {name: 'Pilots'});
        const img = screen.getByRole('img', {name: /imagem do luke skywalker/i})

        expect(titleEl).toBeInTheDocument();
        expect(img).toBeInTheDocument();
    });

    it('Verifica se ao clicar no botão STARSHIPS a pagina é redirecionada',() => {
        renderWithRouter(<App />)

        const starshipsbtn = screen.getByRole('button', {name: 'Starships'})
        expect(starshipsbtn).toBeInTheDocument();

        userEvent.click(starshipsbtn);

        const titleEl = screen.getByRole('heading', {name: 'Starships'});
        const img = screen.getByRole('img', {name: /imagem do cr90 corvette/i})

        expect(titleEl).toBeInTheDocument();
        expect(img).toBeInTheDocument();
    });
})