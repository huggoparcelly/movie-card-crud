import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import { EditMovie, MovieDetails, MovieList, NewMovie, NotFound } from './pages';

class App extends Component {
  render() {
    return (
      <Router>
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
        <div>Movie Card Library CRUD</div>
      </Router>
    );
  }
}

export default App;
