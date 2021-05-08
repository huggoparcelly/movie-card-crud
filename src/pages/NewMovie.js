import React, { Component } from 'react';

import { MovieForm } from '../components';
// import * as movieAPI from '../services/movieAPI';

class NewMovie extends Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  // newMovie
  handleSubmit() {
    // requisito 6 deve criar um novo cartão utilizando a função `createMovie` do módulo `movieAPI`.
    // Após o fim da requisição, `NewMovie` deve redirecionar o app para a página inicial("/"), contento o novo cartão.
    // Será validado se a página inicial contém um link "ADICIONAR CARTÃO". Esse link deve redirecionar para a página de criação de filmes
  }

  render() {
    return (
      <div data-testid="new-movie">
        <MovieForm onSubmit={ this.handleSubmit } />
      </div>
    );
  }
}
export default NewMovie;
