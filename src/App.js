import React, { Component } from "react";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import GameArea from "./components/GameArea";
import CatCard from "./components/CatCard";
import cats from "./cats.json";

class App extends Component {
  //Setting this.state.friends to the friends json array
  state = {
    cats,
    chosenCats: [],
    currentScore: 37,
    highScore: 37
  };

  checkCat = id => {
    // Filter this.state.friends for friends with an id not equal to the id being removed
    //const cats = this.state.cats.filter(cat => cat.id !== id);
    // Set this.state.friends equal to the new friends array
    //this.setState({ cats });
    alert("You clicked id " + id);
  };

  // shuffleCatCards = () => {
  //   console.log("Shuffle called");
  // };

  // Map over this.state.friends and render a FriendCard component for each friend object
  render() {
    return (
      <Wrapper>
        <Title >{this.state.cats.currentScore}</Title>
        <GameArea>
        {this.state.cats.map(cat => (
          <CatCard
            checkCat={this.checkCat}
            id={cat.id}
            key={cat.id}
            name={cat.name}
            image={cat.image}
          />
        ))}
        </GameArea>
      </Wrapper>
    );
  }
}

export default App;
