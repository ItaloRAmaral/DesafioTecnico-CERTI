import React from "react";
import { Link } from "react-router-dom";

class Home extends React.Component {
  render() {
    return (
      <section
        className="flex h-screen bg-cover items-center justify-center gap-btnGap"
        id="home-container"
      >
        <Link to="/starships">
          <button className="uppercase bg-brand-primary p-3 rounded-lg text-brand-dark hover:bg-brand-secondary hover:text-brand-primary w-[8rem]">
            Starships
          </button>
        </Link>

        <Link to="/pilots">
          <button className="uppercase bg-brand-primary p-3 rounded-lg text-brand-dark hover:bg-brand-secondary hover:text-brand-primary w-[8rem]">
            Pilots
          </button>
        </Link>
      </section>
    );
  }
}

export default Home;
