import React from 'react';

class ItemDetail extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const item = this.props.item;
    return(
      <section id='item-detail-container'>
        <h4>{item.name}</h4>
        <ul>
          <li>Happiness: {item.happiness}</li>
          <li>Price: ${item.price}</li>
        </ul>
      </section>
    )
  }
}

export default ItemDetail;
