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
    currentScore: 0,
    highScore: 5
  };

  handleCatClick = id => {
    // Filter this.state.friends for friends with an id not equal to the id being removed
    //const cats = this.state.cats.filter(cat => cat.id !== id);
    // Set this.state.friends equal to the new friends array
    //this.setState({ cats });
    // console.log(this.state.currentScore)
    // this.setState({ currentScore: this.state.currentScore + 1 });
    // console.log(this.state.currentScore)
    // this.handleHighScore(this.state.currentScore);
    // console.log(` You clicked id ${id} | Current Score: ${this.state.currentScore} | High Score; ${this.state.highScore}`)

    // ()

    //Handle the Score

    this.state.currentScore <= (this.state.highScore -1)
      ? this.setState({ currentScore: this.state.currentScore + 1 })
      : this.setState({
          currentScore: this.state.currentScore + 1,
          highScore: this.state.highScore + 1
        });
  };


  // shuffleCatCards = () => {
  //   console.log("Shuffle called");
  // };

  // Map over this.state.friends and render a FriendCard component for each friend object
  render() {
    return (
      <Wrapper>
        <Title
          currentScore={this.state.currentScore}
          highScore={this.state.highScore}
        />
        <GameArea>
          {this.state.cats.map(cat => (
            <CatCard
              handleCatClick={this.handleCatClick}
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
