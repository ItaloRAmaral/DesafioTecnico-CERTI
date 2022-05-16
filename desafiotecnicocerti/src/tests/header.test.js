import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from '../App';
import renderWithRouter from '../helper/renderWithRouter';

describe('Testando a pagina <Header />', () => {
    it('Verifica se renderiza os links Home, Pilots e Starships', () => {
        renderWithRouter(<App />)

        const homeLink = screen.getByTestId('Home-link');
        expect(homeLink).toBeInTheDocument();

        const pilotsLink = screen.getByTestId('Pilots-link');
        expect(pilotsLink).toBeInTheDocument();

        const starshipsLink = screen.getByTestId('Starships-link');
        expect(starshipsLink).toBeInTheDocument();
    });

    it('Verifica se renderiza os links Home, Pilots e Starships, na da pagina Pilots', () => {
        renderWithRouter( < App / > )

        const homeLink = screen.getByTestId('Home-link');
        expect(homeLink).toBeInTheDocument();

        const pilotsLink = screen.getByTestId('Pilots-link');
        expect(pilotsLink).toBeInTheDocument();

        const starshipsLink = screen.getByTestId('Starships-link');
        expect(starshipsLink).toBeInTheDocument();

        userEvent.click(pilotsLink);
        expect(homeLink).toBeInTheDocument();
        expect(pilotsLink).toBeInTheDocument();
        expect(starshipsLink).toBeInTheDocument();

        const titleEl = screen.getByRole('heading', {name: 'Pilots'});
        const img = screen.getByRole('img', {name: /imagem do luke skywalker/i})

        expect(titleEl).toBeInTheDocument();
        expect(img).toBeInTheDocument();  
    });

    it('Verifica se renderiza os links Home, Pilots e Starships, na da pagina Starships', () => {
        renderWithRouter(<App />)

        const homeLink = screen.getByTestId('Home-link');
        expect(homeLink).toBeInTheDocument();

        const pilotsLink = screen.getByTestId('Pilots-link');
        expect(pilotsLink).toBeInTheDocument();

        const starshipsLink = screen.getByTestId('Starships-link');
        expect(starshipsLink).toBeInTheDocument();

        userEvent.click(starshipsLink);
        expect(homeLink).toBeInTheDocument();
        expect(pilotsLink).toBeInTheDocument();
        expect(starshipsLink).toBeInTheDocument();

        const titleEl = screen.getByRole('heading', {name: 'Starships'});
        const img = screen.getByRole('img', {name: /imagem do cr90 corvette/i})

        expect(titleEl).toBeInTheDocument();
        expect(img).toBeInTheDocument();
    });

    it('Verifica a navegaçao entre os links do <Header />', () => {
        renderWithRouter(<App />)

        const homeLink = screen.getByTestId('Home-link');
        expect(homeLink).toBeInTheDocument();

        const pilotsLink = screen.getByTestId('Pilots-link');
        expect(pilotsLink).toBeInTheDocument();

        const starshipsLink = screen.getByTestId('Starships-link');
        expect(starshipsLink).toBeInTheDocument();

        userEvent.click(pilotsLink);
        expect(homeLink).toBeInTheDocument();
        expect(pilotsLink).toBeInTheDocument();
        expect(starshipsLink).toBeInTheDocument();

        const titlePilots = screen.getByRole('heading', {name: 'Pilots'});
        const imgPilots = screen.getByRole('img', {name: /imagem do luke skywalker/i})

        expect(titlePilots).toBeInTheDocument();
        expect(imgPilots).toBeInTheDocument();

        userEvent.click(starshipsLink);
        expect(homeLink).toBeInTheDocument();
        expect(pilotsLink).toBeInTheDocument();
        expect(starshipsLink).toBeInTheDocument();

        const titleStarships = screen.getByRole('heading', {name: 'Starships'});
        const imgStarships = screen.getByRole('img', {name: /imagem do cr90 corvette/i})

        expect(titleStarships).toBeInTheDocument();
        expect(imgStarships).toBeInTheDocument();

        userEvent.click(homeLink);
        expect(homeLink).toBeInTheDocument();
        expect(pilotsLink).toBeInTheDocument();
        expect(starshipsLink).toBeInTheDocument();

        const pilotsbtn = screen.getByRole('button', {name: 'Pilots'})
        expect(pilotsbtn).toBeInTheDocument();

        const starshipsbtn = screen.getByRole('button', {name: 'Starships'})
        expect(starshipsbtn).toBeInTheDocument();
    })
});