import React from "react";
import { Link } from "react-router-dom";

class Header extends React.Component {
    render() {
        return (
          <header className="flex bg-brand-lightDark justify-between items-center h-10">
            <h1 className="flex ml-2"> Star Wars Catalog</h1>

            <nav>
              <ul className="flex mr-2 gap-5">
                <Link to={'/home'}>
                  <li className="hover:text-brand-secondary cursor-pointer">
                    Home
                  </li>
                </Link>

                <li className="hover:text-brand-secondary cursor-pointer">
                  Pilots
                </li>
                <li className="hover:text-brand-secondary cursor-pointer">
                  Starships
                </li>
              </ul>
            </nav>
          </header>
        );
    }
};

export default Header;