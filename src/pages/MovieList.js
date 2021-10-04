import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Loading } from '../components';
import MovieCard from '../components/MovieCard';

import * as movieAPI from '../services/movieAPI';

class MovieList extends Component {
  constructor() {
    super();
    this.fetchMovies = this.fetchMovies.bind(this);
    this.state = {
      movies: [],
      loading: true,
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
      loading: false,
    });
  }

  render() {
    const { movies, loading } = this.state;

    // Render Loading here if the request is still happening
    if (loading) return <Loading />;

    return (
      <div>
        <div data-testid="movie-list" className="movie-list">
          { movies.map((movie) => <MovieCard key={ movie.title } movie={ movie } />) }
        </div>
        <nav className="details">
          <Link to="/movies/new">ADICIONAR CARTÃO</Link>
        </nav>
      </div>
    );
  }
}

export default MovieList;
