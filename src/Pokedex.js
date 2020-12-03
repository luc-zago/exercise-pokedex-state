import React from 'react';
import Pokemon from './Pokemon';

class Pokedex extends React.Component {
    constructor(props) {
      super(props);
      this.previous = this.previous.bind(this);
      this.next = this.next.bind(this);
      this.fireFilter = this.fireFilter.bind(this);
      this.psychicFilter = this.psychicFilter.bind(this);
      this.renderPokemon = this.renderPokemon.bind(this);
      this.state = {
        pokemons: this.props.pokemons,
        number: 0,
        fireFilter: false,
        psychicFilter: false,
      };
    }

    previous() {
      const { pokemons, number } = this.state;
      // const { pokemons } = this.props;
      let newNumber = number -1;
      if (newNumber < 0) {
        return this.setState({ number: (pokemons.length -1) });
      }
      this.setState({ number: newNumber });
    }
    
    next() {
      const { pokemons, number } = this.state;
      // const { pokemons } = this.props;
      let newNumber = number +1;
      if (newNumber > (pokemons.length -1)) {
        return this.setState({ number: 0 });
      }
      this.setState({ number: newNumber });
    }
  
    fireFilter() {
      const { fireFilter, pokemons } = this.state;
      if (fireFilter === false) {
        const firePokemons = pokemons.filter((pokemon) => pokemon.type === 'Fire');
        return this.setState({
          fireFilter: true,
          pokemons: firePokemons,
        });
      }
      if (fireFilter) return this.setState({
        fireFilter: false,
        pokemons: this.props.pokemons,
      });
    }
  
    psychicFilter() {
      const { psychicFilter, pokemons } = this.state;
      if (psychicFilter === false) {
        const psychicPokemons = pokemons.filter((pokemon) => pokemon.type === 'Psychic');
        return this.setState({
          psychicFilter: true,
          pokemons: psychicPokemons,
        });
      }
      if (psychicFilter) return this.setState({
        psychicFilter: false,
        pokemons: this.props.pokemons,
      });
    }

    renderPokemon() {
      const { pokemons, number } = this.state;
      
      if (pokemons[number] === undefined) {
        return (
          <h1>No pokémon found :(</h1>
        );
      }
      return (
        <div className="pokedex">
          <Pokemon key={ pokemons[number].id } pokemon={ pokemons[number] } />)}
        </div>
      );
    }
    
    render() {
        return (
            <div>
              { this.renderPokemon() }
              <div className="buttons">
                <button type="button" onClick={ this.previous }>Previous</button>
                <button type="button" onClick={ this.next }>Next</button>
              </div>
              <p>Filter by type!</p>
              <div className="filter">
                <button type="button" onClick={ this.fireFilter }>Fire</button>
                <button type="button" onClick={ this.psychicFilter }>Psychic</button>
              </div>
            </div>
        );
    }
}

export default Pokedex;