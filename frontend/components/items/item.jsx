import React from 'react';
import { Link } from 'react-router-dom';

const Item = ({ item }) => (
  <li>
    <img src={ item.image_url } alt={ item.name } style={{ width: '50px', height: '50px' }}/>
  </li>
);

export default Item;
