import React from 'react';
import Pokemon from './Pokemon';

const Pokelist = props => {
    
    return(
        <ul className="pokelist">
            {props.data.map((pokemon) => <li key={pokemon.id}><Pokemon url={pokemon.url} name={pokemon.name} types={pokemon.types}/></li>)}
        </ul>
    )
}

export default Pokelist;