import React from "react";
import Title from "../components/Title";

class Pilots extends React.Component {
  render() {
    return (
      <section 
      className="flex flex-col h-screen bg-cover"
      id="pilot-container"
      >
        <Title title="Pilots" />
      </section>
    );
  }
}

export default Pilots;
