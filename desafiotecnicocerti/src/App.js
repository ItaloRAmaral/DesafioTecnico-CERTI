import React from "react";
import Content from './components/Content';
import Header from './components/Header';

class App extends React.Component {
  render() {
    return (
      <section>
        <Header />
        <Content />
      </section>
    );
  }
}

export default App;
