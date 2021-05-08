import React, { Component } from 'react';
import { Loading } from '../components';
import MovieCard from '../components/MovieCard';

import * as movieAPI from '../services/movieAPI';

class MovieList extends Component {
  constructor() {
    super();
    this.fetchMovies = this.fetchMovies.bind(this);
    this.state = {
      movies: [],
      loading: false,
    };
  }

  componentDidMount() {
    this.fetchMovies(); // requisição feita na montagem da pagina
    // se tiver em curso renderizar o componente Loading
  }

  async fetchMovies() {
    // requisição com getMovie lá de movieAPI
    const request = await movieAPI.getMovies();
    this.setState({
      movies: request, // populando o array movies
      loading: true,
    });
  }

  render() {
    const { movies, loading } = this.state;

    // Render Loading here if the request is still happening
    const renderMovies = movies
      .map((movie) => <MovieCard key={ movie.title } movie={ movie } />);

    return (
      <div data-testid="movie-list">
        {loading ? renderMovies : <Loading /> }
      </div>
    );
  }
}

export default MovieList;
