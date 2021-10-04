import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import * as movieAPI from '../services/movieAPI';
import { Loading } from '../components';

class MovieDetails extends Component {
  constructor() {
    super();
    this.fetchMovie = this.fetchMovie.bind(this);
    this.state = {
      movie: '',
      loading: true,
    };
  }

  componentDidMount() {
    this.fetchMovie(); // requisição feita na montagem da pagina
  }

  async fetchMovie() {
    const { match: { params: { id } } } = this.props;
    // requisição com getMovie lá de movieAPI
    const request = await movieAPI.getMovie(id);
    this.setState({
      movie: request, // populando o array movies
      loading: false,
    });
  }

  async deletMovie(id) {
    await movieAPI.deleteMovie(id);
  }

  render() {
    // Change the condition to check the state
    // if (true) return <Loading />;
    const { loading,
      movie: { title, storyline, imagePath, genre, rating, subtitle, id } } = this.state;
    if (loading) return <Loading />;

    return (
      <div data-testid="movie-details" className="movie-card">
        <img alt="Movie Cover" className="movie-card-image" src={ `../${imagePath}` } />
        <div className="movie-card-body">
          <p className="movie-card-title">{ `Title: ${title}` }</p>
          <p className="movie-card-subtitle">{ `Subtitle: ${subtitle}` }</p>
          <p className="movie-card-storyline">{ `Storyline: ${storyline}` }</p>
          <p>{ `Genre: ${genre}` }</p>
        </div>
        <div className="movie-card-rating">
          <span className="rating">
            {`Rating: ${rating}`}
          </span>
        </div>
        <nav className="detailsLinks">
          <Link to={ `/movies/${id}/edit` }>EDITAR</Link>
          <Link to="/">VOLTAR</Link>
          <Link to="/" onClick={ () => this.deletMovie(id) }>DELETAR</Link>
        </nav>
      </div>
    );
  }
}

MovieDetails.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
    }),
  }).isRequired,
};

export default MovieDetails;
