import React from "react";
import Title from "../components/Title";
import {starships} from "../data/starships"
import InfoCard from "../components/InfoCard";

class Starships extends React.Component {
  render() {
    return (
      <section className="flex flex-col h-screen bg-cover" id="pilot-container">
        <Title title="Starships" />
        <div className="flex flex-wrap gap-3 justify-center">
          {starships.map((starship) => (
            <InfoCard name={starship.name} image={starship.image} />
          ))}
        </div>
      </section>
    );
  }
}

export default Starships;
