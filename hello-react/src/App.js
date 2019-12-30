import React, { Component } from 'react';
import './App.css';
import Movie from './Movie.js';

const movieTitles = [
  "Joker",
  "Frozen",
  "유열의 음악앨범",
  "82년생 김지영",
]

const movieImages = [
  "https://img1.daumcdn.net/thumb/C155x225/?fname=http%3A%2F%2Ft1.daumcdn.net%2Fmovie%2F0357a82b7226464b87072c0b8d2246b71567986846719",
  "https://img1.daumcdn.net/thumb/C155x225/?fname=http%3A%2F%2Ft1.daumcdn.net%2Fmovie%2F5afd212b68e34e61a964d969dd898e2f1574298873981",
  "https://img1.daumcdn.net/thumb/C155x225/?fname=http%3A%2F%2Ft1.daumcdn.net%2Fmovie%2F582477f43a5143faa7a95290128596aa1565059580851",
  "https://img1.daumcdn.net/thumb/C155x225/?fname=http%3A%2F%2Ft1.daumcdn.net%2Fmovie%2Fcc7165f75bb94140a95d977881cebc191571895256827"
]

class App extends Component {
  render() {
    return (
      <div className="App">
        <Movie title={movieTitles[0]} poster={movieImages[0]} />
        <Movie title={movieTitles[1]} poster={movieImages[1]} />
        <Movie title={movieTitles[2]} poster={movieImages[2]} />
        <Movie title={movieTitles[3]} poster={movieImages[3]} />
      </div>
    );
  }
}

export default App;
