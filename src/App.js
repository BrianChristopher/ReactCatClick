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
    highScore: 0
  };

  handleCatClick = id => {
    if (this.state.chosenCats.includes(id)) {
      //This checks if the cat has already been chosen.
      //A MESSAGE WOULD BE NICE HERE
      alert("Meow! You have already clicked that cat.")
      this.handleReset();
    } else {
      //If the cat has not been chosen, add it's id to the array
      let idArray = [];
      idArray = this.state.chosenCats;
      idArray.push(id);
      this.setState({ chosenCats: idArray });
      console.log(this.state.chosenCats);

      //Update the score
      this.state.currentScore <= this.state.highScore - 1
        ? this.setState({ currentScore: this.state.currentScore + 1 })
        : this.setState({
            currentScore: this.state.currentScore + 1,
            highScore: this.state.highScore + 1
          });

      //Shuffle the cat cards
      let catArrayShuffle = this.state.cats;
      //This is Fisher-Yates shuffle (copied from https://javascript.info/task/shuffle)
      for (let i = catArrayShuffle.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1)); // random index from 0 to i
        [catArrayShuffle[i], catArrayShuffle[j]] = [
          catArrayShuffle[j],
          catArrayShuffle[i]
        ]; // swap elements
      }
      this.setState({cats:catArrayShuffle})

      // Check this.state.chosenCats for cats with an id not equal to the id being removed
      //const cats = this.state.cats.filter(cat => cat.id !== id);
      // Set this.state.friends equal to the new friends array
      //this.setState({ cats });
    }
  };

  handleReset = () => {
    this.setState({ chosenCats: [], currentScore: 0 });
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
