// import React, { Component } from 'react';
import React from 'react';
import PropTypes from 'prop-types';
import './Movie.css';
// import LineEllipsis from './Line';

function Movie({title, poster, genres, synopsis}) {
    return (
        <div className="Movie">
            <div className="Movie__Column">
                {/* alt : image tooltip을 위해서 alt 사용 */}
                <MoviePoster poster={poster} alt={title} />
            </div>
            <div className="Movie__Column">
                <h1>{title}</h1>
                <div className="Movie__Genres">
                    {genres.map((genre, index) => <MovieGenre genre={genre} key={index} />)}
                </div>
                {/* p = paragraph(문단의 약어) */}
                <div className="Movie__Synopsis">
                    {/* <LineEllipsis 
                        text={synopsis}
                        maxLine='3'
                        ellipsis='...'
                        trimRight
                        basedOn='letters'
                    /> */}
                    {synopsis}
                </div>
            </div>
        </div>
    )
}

function MoviePoster({poster, alt}) {
    return (
        <img src={poster} alt={alt} title={alt} className="Movie__Poster" />
    )
}

// crete new funcional component
function MovieGenre({genre}) {
    return (
        <span className="Movie__Genre">{genre}</span>
    )
}


Movie.propTypes = {
    title: PropTypes.string.isRequired,
    poster: PropTypes.string.isRequired,
    genres: PropTypes.array.isRequired,
    synopsis: PropTypes.string.isRequired
    // releaseDate: PropTypes.string.isRequired
}

MoviePoster.propTypes = {
    poster: PropTypes.string.isRequired,
    alt: PropTypes.string.isRequired
}

MovieGenre.propTypes = {
    genre: PropTypes.string.isRequired
}

// class Movie extends Component {
//     render() {
//         // console.log(this.props);
//         return (
//             <div>
//                 <MoviePoster poster={this.props.poster} />
//                 <h1>{this.props.title}</h1>
//             </div>
//         );
//     }
// }

// class MoviePoster extends Component {
    
//     static propTypes = {
//         poster: PropTypes.string.isRequired
//     }

//     render() {
//         // console.log(this.props);
//         return (
//             <img src={this.props.poster} alt="Movie Poster" />
//         );
//     }
// }

export default Movie;