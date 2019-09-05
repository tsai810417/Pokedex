import React from 'react';

export const PokemonIndexItem = ({ pokemon }) => (
  <li>
    <img src={pokemon.image_url} alt={pokemon.name} style={{width: '30px', height: '30px'}}/>
    <span>{ pokemon.name }</span>
  </li>
);
