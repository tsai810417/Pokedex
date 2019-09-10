import React from 'react';
import ItemDetailContainer from './item_detail_container';
import { Link } from 'react-router-dom';

const Item = ({ item }) => (
  <li>
    <Link to={`/pokemon/${item.pokemon_id}/item/${item.id}`}>
      <img src={ item.image_url } alt={ item.name } style={{ width: '50px', height: '50px' }}/>
    </Link>
  </li>
);

export default Item;
