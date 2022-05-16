import React from "react";
import { Link } from "react-router-dom";

class Header extends React.Component {
    constructor() {
      super();
      
      this.state = {
        home: false,
        pilots: false,
        starships: false,
      }
    };

    render() {
        const { home, pilots, starships } = this.state;
        return (
          <header className="flex bg-brand-lightDark justify-between items-center h-10">
            <h1 className="flex ml-2"> Star Wars Catalog</h1>

            <nav>
              <ul className="flex mr-2 gap-[4rem]">
                <Link to="/">
                  <li
                    className="hover:text-brand-secondary cursor-pointer"
                    name="home"
                    onClick={() => { this.setState({ home: true, pilots: false, starships: false })}}
                    style={{ color: home ? '#F56F36' : null}}
                    data-testid="Home-link"
                  >
                    Home
                  </li>
                </Link>

                <Link to="/pilots">
                  <li
                    className="hover:text-brand-secondary cursor-pointer"
                    name="pilots"
                    onClick={() => { this.setState({ home: false, pilots: true, starships: false })}}
                    style={{ color: pilots ? '#F56F36' : null}}
                    data-testid="Pilots-link"
                  >
                    Pilots
                  </li>
                </Link>

                <Link to="/starships">
                  <li
                    className="hover:text-brand-secondary cursor-pointer"
                    name="starships"
                    onClick={() => { this.setState({ home: false, pilots: false, starships: true })}}
                    style={{ color: starships ? '#F56F36' : null}}
                    data-testid="Starships-link"
                  >
                    Starships
                  </li>
                </Link>
              </ul>
            </nav>
          </header>
        );
    }
};

export default Header;