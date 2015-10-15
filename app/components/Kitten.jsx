import React, { Component } from 'react';

export default class Kitten extends Component {
  render() {
    const kittenNodes = this.props.kittens.map((kitten, index) => {
      return (
        <li key={index}> {kitten.type} 🐱 </li>
      );
    });

    return (
      <div className="kittens">
        <ul>
          {kittenNodes}
        </ul>
      </div>
    );
  }
}