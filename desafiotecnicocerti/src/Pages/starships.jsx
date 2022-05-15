import React from "react";
import Title from "../components/Title";

class Starships extends React.Component {
  render() {
    return (
      <section className="flex flex-col h-screen bg-cover" id="pilot-container">
        <Title title="Starships" />
      </section>
    );
  }
}

export default Starships;
