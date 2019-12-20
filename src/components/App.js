import React from 'react';
import '../stylesheets/App.scss';
import pokemons from '../data/pokemons.json';
import Pokelist from './PokeList';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: pokemons
    }
  }

  render() {
    return (
      <div className="App">
      <h1 className="App__title">Mi lista de Pokemon</h1>
        <Pokelist
          data={this.state.data}
        />
      </div>
    );
  }
}

export default App;
