import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import { EditMovie, MovieDetails, MovieList, NewMovie, NotFound } from './pages';

class App extends Component {
  render() {
    return (
      <Router>
        <header className="movie-card-header">
          <h1 className="page-title">Movie Cards Library</h1>
        </header>
        <h2 className="page-subtitle">Movie Card Library CRUD</h2>
        <Switch>
          <Route exact path="/" render={ () => <MovieList /> } />
          <Route
            exact
            path="/movies/new"
            render={ () => <NewMovie /> }
          />
          <Route
            exact
            path="/movies/:id"
            render={ (props) => <MovieDetails { ...props } /> }
          />
          <Route
            exact
            path="/movies/:id/edit"
            render={ (props) => <EditMovie { ...props } /> }
          />
          <Route component={ NotFound } />
        </Switch>
      </Router>
    );
  }
}

export default App;
