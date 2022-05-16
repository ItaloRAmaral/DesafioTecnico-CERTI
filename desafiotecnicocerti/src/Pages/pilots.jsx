import React from "react";
import InfoCard from "../components/InfoCard";
import Title from "../components/Title";
import {pilots} from '../data/pilots'

class Pilots extends React.Component {
  render() {
    return (
      <section className="flex flex-col bg-brand-primary">
        <Title title="Pilots" />
        <div className="flex flex-wrap gap-3 justify-center">
          {pilots.map((pilot) => (
            <InfoCard name={pilot.name} image={pilot.image} />
          ))}
        </div>
      </section>
    );
  }
}

export default Pilots;
