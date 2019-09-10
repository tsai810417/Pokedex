import React from 'react';

class ItemDetail extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const item = this.props.item;
    return(
      <section>
        <h3>{item.name}</h3>
        <ul>
          <li>Happiness: {item.happiness}</li>
          <li>Price: ${item.price}</li>
        </ul>
      </section>
    )
  }
}

export default ItemDetail;
