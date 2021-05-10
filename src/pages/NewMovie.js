import React, { Component } from 'react';
import { Redirect } from 'react-router';
import PropTypes from 'prop-types';
import { MovieForm } from '../components';
import * as movieAPI from '../services/movieAPI';

class NewMovie extends Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.state = { ...props.movie, shouldRedirect: false };
  }

  async handleSubmit(newMovie) {
    const addMovie = await movieAPI.createMovie(newMovie);
    this.setState({ movie: addMovie, shouldRedirect: true });
  }

  render() {
    const { shouldRedirect, movie } = this.state;
    if (shouldRedirect) {
      // Redirect
      return <Redirect to="/" />;
    }
    return (
      <div data-testid="new-movie">
        <MovieForm
          movie={ movie }
          onSubmit={ (newMovie) => this.handleSubmit(newMovie) }
        />
      </div>
    );
  }
}

NewMovie.propTypes = {
  movie: PropTypes.object,
}.isRequired;

export default NewMovie;
