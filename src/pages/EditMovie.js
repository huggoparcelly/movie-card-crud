import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router';
import { Loading, MovieForm } from '../components';
import * as movieAPI from '../services/movieAPI';

class EditMovie extends Component {
  constructor(props) {
    super(props);
    this.state = { ...props.movie, status: 'loading', shouldRedirect: false };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.fetchMovie = this.fetchMovie.bind(this);
  }

  componentDidMount() {
    this.fetchMovie(); // requisição feita na montagem da pagina
  }

  // updatedMovie
  async handleSubmit(updatedMovie) {
    const update = await movieAPI.updateMovie(updatedMovie);
    this.setState({ movie: update, shouldRedirect: true });
  }

  async fetchMovie() {
    const { match: { params: { id } } } = this.props;
    // requisição com getMovie lá de movieAPI
    const request = await movieAPI.getMovie(id);
    this.setState({
      movie: request, // populando o array movies
      status: 'ok',
    });
  }

  render() {
    const { status, shouldRedirect, movie } = this.state;
    if (shouldRedirect) {
      // Redirect
      return <Redirect to="/" />;
    }

    if (status === 'loading') {
      // render Loading
      return <Loading />;
    }

    return (
      <div data-testid="edit-movie">
        <MovieForm movie={ movie } onSubmit={ (update) => this.handleSubmit(update) } />
      </div>
    );
  }
}

EditMovie.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
    }),
  }).isRequired,
  movie: PropTypes.object,
}.isRequired;

export default EditMovie;
