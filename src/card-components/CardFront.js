import React, { Component } from 'react';

export default class CardFront extends Component {

  render() {
    return (
      // This component should have one prop, which should be used to apply a background image.
      // This can be done inline via:
      // <div className="card-front" style={{backgroundImage: `url(${' '})`}}>
      <div className="card-front" style={{backgroundImage: `url(${this.props.poster})`}}>
      </div>
    )
  }
}
