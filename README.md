# Boas vindas ao repositório do projeto de Movie Cards CRUD!

Esse projeto foi realizado com o objetivo de colocar em prática o aprendizado sobre **React** do módulo de front-end da Trybe. 🚀

Aqui você vai encontrar alguns detalhes de como o projeto foi desenvolvido, bem como instruções para acessar e baixar o projeto localmente.
Obrigado por acessar.

<a href="https://huggoparcelly.github.io/project-recipes" target="_blank">LINK</a> para acessar o projeto

---

# Sumário

- [Sobre o projeto](#sobre-o-projeto)
- [Habilidades](#habilidades)
- [O que foi desenvolvido](#desenvolvimento)
- [Instruções](#instruções)

---

# Sobre o projeto

A proposta do projeto foi criar um **CRUD** de cartões de filmes em React.

A sigla **CRUD** significa, Create, Read, Update and Delete, então deve ser possível realizar as seguintes operações nesse projeto:

  * Adicionar um novo filme à lista - CREATE;
  * Listar todos os filmes cadastrados, com uma página de informações resumidas sobre cada filme e uma página de informações detalhadas de um filme selecionado - READ;
  * Editar um filme da lista - UPDATE;
  * Apagar um filme da lista - DELETE;
---
# Habilidades

Nesse projeto, você será capaz de:

- Utilizar o componentDidMount para executar uma ação após o componente ser inserido no DOM;
- Utilizar o shouldComponentUpdate para avaliar se uma atualização do componente deve ou não acontecer naquele momento;
- Utilizar o componentDidUpdate para executar uma ação após o componente ser atualizado;
- Utilizar o componentWillUnmount para realizar uma ação antes de o componente ser desmontado;
- Utilizar o props.children para acessar os filhos de um componente React e interagir com eles;
- Utilizar o componente BrowserRouter corretamente;
- Criar links de navegação na aplicação com o componente Link ;
- Criar rotas, mapeando o caminho da URL com o componente correspondente, via Route ;
- Estruturar e organizar as rotas da sua aplicação com o componente Switch ;
- Usar o componente Redirect pra alternar entre rotas.

---

# Desenvolvimento

 * As funcionalidades do app foram agrupadas e organizadas em rotas.

 * Uma rota define o que deve ser renderizado na página ao abri-la e cada rota está associada a um caminho.

 * Este app terá 4 rotas:

  1. A rota raiz (index), no caminho `/`. Esta rota exibe uma lista com todos os filmes cadastrados. Essa lista contém informações resumidas sobre cada filme.

  2. Uma rota para criar novos filmes, no caminho `/movies/new`. Essa rota renderiza um formulário para adicionar um novo filme.

  3. Uma rota para mostrar informações detalhadas de um filme, no caminho `/movies/:id`. Onde o `:id` é o parâmetro da URL que representa o _id_ do filme exibido. Por exemplo, ao entrar no caminho `/movies/5`, serão exibidas informações sobre o filme com _id_ `5`.

  4. Uma rota para editar um filme, no caminho `/movies/:id/edit`. Assim como na rota 3, `:id` é o _id_ do filme a ser editado. Essa rota renderiza um formulário idêntico ao da rota 2. Nesse caso, porém, o formulário virá preenchido com as informações do filme a ser editado. Ao submeter o formulário, ao invés de criar um novo filme, o filme em questão terá seus dados atualizados.

 * Relacionado a cada rota existe um componente React responsável por renderizar seu conteúdo. Esse mapeamento entre o caminho da URL, rota e componente é feito pelo `React Router`, a principal biblioteca de roteamento em `React`.

 * Naturalmente, haverá links de navegação e redirecionamento entre as diferentes rotas. Por exemplo, na rota 1 (caminho `/`), haverá, para cada filme, um link para a rota 3 (caminho `/movies/:id`), onde se pode ver informações detalhadas sobre o filme escolhido. Na rota 3 (caminho `/movies/:id`), existe um link para a rota 4 (caminho `/movies/:id/edit`), a fim de se editar informações do filme. Ao submeter o formulário, o app automaticamente será levado de volta à rota 3 (caminho `/movies/:id`), mostrando as informações atualizadas do filme. Tudo isso é feito utilizando os componentes da biblioteca `React Router`.

  * Os dados virão de uma API (simulada), que é utilizada para criar, ler, atualizar e apagar filmes. 
 
---

# Instruções

## Instruções para acessar

Através deste <a href="https://huggoparcelly.github.io/project-recipes" target="_blank">LINK</a> é possível acessar o projeto e realizar as operações de CRUD.

## Instruções para baixar o projeto

Caso você tenha o interesse de baixar o projeto e rodar em sua mãquina, basta seguir as instruções.

1. Clone o repositório
  * `git clone git@github.com:huggoparcelly/movie-card-crud.git`.
  * Entre na pasta do repositório que você acabou de clonar:
    * `cd movie-card-crud`
 * Vá para a branch principal do desenvolvimento, com `git checkout huggo-parcelly-project-movie-card-library-crud && git pull`.
 
2. Instale as dependências e inicialize o projeto
  * Instale as dependências:
    * `npm install`
  * Inicialize o projeto:
    * `npm start` (a página da aplicação deve abrir no seu navegador)

---
