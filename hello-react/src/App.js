import React, { Component } from 'react';
import './App.css';
import Movie from './Movie.js';

// const movieTitles = []
// const movieImages = []

class App extends Component {
  // Render: componentWillMount() -> render() ->  componentDidMount()
  // Updete: componentWillReceiveProps() -> shouldComponentUpdate() -> componentWillUpdate() -> render() -> componentDidUpdate()
  state = {}

  componentDidMount() {
    this._getMovies();
    // fetch는 ajax를 url로 불러 올 수 있다.
    
    // setTimeout(() => {
    //   // state를 변경하면 render() 메소드가 새로운 state와 함께 다시 동작한다.
    //   this.setState({
    //     movies: [
    //       {
    //         id: "",
    //         title: "Tunein for Love",
    //         releaseDate: "2019.08.28",
    //         poster: "https://img1.daumcdn.net/thumb/C155x225/?fname=http%3A%2F%2Ft1.daumcdn.net%2Fmovie%2F582477f43a5143faa7a95290128596aa1565059580851"
    //       },
    //       {
    //         id: "",
    //         title: "Joker",
    //         releaseDate: "2019.10.02",
    //         poster: "https://img1.daumcdn.net/thumb/C155x225/?fname=http%3A%2F%2Ft1.daumcdn.net%2Fmovie%2F0357a82b7226464b87072c0b8d2246b71567986846719"
    //       },
    //       {
    //         id: "",
    //         title: "KIM JI-YOUNG, BORN 1982",
    //         releaseDate: "2019.10.23",
    //         poster: "https://img1.daumcdn.net/thumb/C155x225/?fname=http%3A%2F%2Ft1.daumcdn.net%2Fmovie%2Fcc7165f75bb94140a95d977881cebc191571895256827"
    //       },
    //       {
    //         id: "",
    //         title: "Frozen 2",
    //         releaseDate: "2019.11.21",
    //         poster: "https://img1.daumcdn.net/thumb/C155x225/?fname=http%3A%2F%2Ft1.daumcdn.net%2Fmovie%2F5afd212b68e34e61a964d969dd898e2f1574298873981"  
    //       },
    //       {
    //         title: "Toy Stroy 4",
    //         poster: "https://img1.daumcdn.net/thumb/C155x225/?fname=http%3A%2F%2Ft1.daumcdn.net%2Fmovie%2Fda2e6f0663514ba3aaf1f003733d08831560262646934",
    //         releaseDate: "2019.06.20"
    //       }
    //     ]
    //   })
    // }, 3000)
  }
 
  _renderMovies = () => {
    const movies = this.state.movies.map((movie) => {
      // console.log(movie);
      return <Movie
        title={movie.title_english}
        poster={movie.medium_cover_image}
        key={movie.id}
        genres={movie.genres}
        synopsis={movie.synopsis}
      />
    })
    return movies
  }

  // async: 순서와 상관없이 작업이 진행(비동기)
  _getMovies = async () => {
    const movies = await this._callApi()
    this.setState({
      movies
    })
  }

  _callApi = () => {
    // return fetch('https://yts.lt/api/v2/list_movies.json?sort_by=rating')
    return fetch('https://yts.lt/api/v2/list_movies.json?sort_by=download_count')
    .then(potato => potato.json())
    .then(json => json.data.movies)
    .catch(err => console.log(err))
  }

  render() {
    const { movies } = this.state;
    return (
      <div className={movies ? "App" : "App-loading"}>
        {this.state.movies ? this._renderMovies() : 'Loaading'}
        {/* Movie는 현 싸이클의 현재 엘리먼트를 의미 */}
        {/* {this.state.movies.map((movie, index) => {
          return <Movie title={movie.title} releaseDate={movie.releaseDate} poster={movie.poster} key={index} />
        })} */}
      </div>
    );
  }
}

export default App;
