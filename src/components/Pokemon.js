import React from 'react';
import PropTypes from 'prop-types';

const Pokemon = (props) => {
    return(
        <div className="card">
            <img src={props.url} alt={props.name} className="card__img"></img>
            <h2 className="card__title">{props.name}</h2>
            <ul className="card__types">{props.types.map((type, index) => <li key={index}>{type}</li>)}</ul>
        </div>
    )
}

Pokemon.propTypes = {
    url: PropTypes.string,
    name: PropTypes.string,
    types: PropTypes.array
}

export default Pokemon;