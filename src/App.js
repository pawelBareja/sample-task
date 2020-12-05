import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import CardBox from "./components/card/CardBox";
// import Card from "./components/card/Card";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      pets: [],
    };

    fetch("http://127.0.0.1:8080/pets-data.json")
      .then((resp) => resp.json())
      .then(this.setState.bind(this));
  }

  render() {
    const { pets } = this.state;
    console.log(pets);

    return (
      <div className="App">
        {/* <header className="App-header" /> */}
        <CardBox pets={pets} />
        {/* <Card/> */}
      </div>
    );
  }
}

export default App;
