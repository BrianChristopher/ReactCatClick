import React, { Component } from "react";
import CatCard from "./components/CatCard";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import cats from "./cats.json.js";

class App extends Component {
  // Setting this.state.friends to the friends json array
  state = {
    cats,
    chosenCats: [],
    currentScore: 0,
    highScore: 0
  };

  checkCat = id => {
    // Filter this.state.friends for friends with an id not equal to the id being removed
    const cats = this.state.cats.filter(cat => cat.id !== id);
    // Set this.state.friends equal to the new friends array
    this.setState({ cats });
  };

  shuffleCatCards = () => {
    console.log("Shuffle called");
  };

  // Map over this.state.friends and render a FriendCard component for each friend object
  render() {
    return (
      <Wrapper>
        <Title />
        {this.state.friends.map(cat => (
          <CatCard
            checkCat={this.checkCat}
            id={cat.id}
            key={cat.id}
            name={cat.name}
            image={cat.image}
          />
        ))}
      </Wrapper>
    );
  }
}

export default App;
