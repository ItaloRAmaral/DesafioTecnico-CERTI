import React from "react";
import { Link } from "react-router-dom";

class Header extends React.Component {
    render() {
        return (
          <header className="flex bg-brand-lightDark justify-between items-center h-10">
            <h1 className="flex ml-2"> Star Wars Catalog</h1>

            <nav>
              <ul className="flex mr-2 gap-[4rem]">
                <Link to="/">
                  <li className="hover:text-brand-secondary cursor-pointer">
                    Home
                  </li>
                </Link>

                <Link to="/pilots">
                  <li className="hover:text-brand-secondary cursor-pointer">
                    Pilots
                  </li>
                </Link>

                <Link to="/starships">
                  <li className="hover:text-brand-secondary cursor-pointer">
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