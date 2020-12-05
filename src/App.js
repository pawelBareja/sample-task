import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import CardBox from "./components/card/CardBox";
import Topmenu from "./components/Menu/Topmenu";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      pets: [],
      sorted: false,
    };

    fetch("http://127.0.0.1:8080/pets-data.json")
      .then((resp) => resp.json())
      .then(this.setState.bind(this));
  }

  handleSortAge = (e) => {
    const { name } = e.target;
    const { pets } = this.state;
    const sorted = !this.state.sorted;
    const sortedPets = [...pets];

    if (!this.state.sorted) {
      sortedPets.sort((a, b) => (a.name > b.name ? 1 : -1));
      console.log(sortedPets.sort((a, b) => (a.name > b.name ? 1 : -1)));
    } else {
      sortedPets.sort((a, b) => (a.name < b.name ? 1 : -1));
    }

    this.setState({
      pets: sortedPets,
      sorted: sorted,
    });
  };

  handleRemove = (id) => {
    console.log(id);
    const { pets } = this.state;
    const reducedPets = pets.filter((item) => item.name !== id);

    this.setState({
      pets: reducedPets,
    });
  };

  render() {
    const { pets } = this.state;

    return (
      <div className="App">
        <Topmenu pets={pets} handleSortAge={this.handleSortAge} />
        <CardBox pets={pets} handleRemove={this.handleRemove} />
      </div>
    );
  }
}

export default App;
