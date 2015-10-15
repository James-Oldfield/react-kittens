import React, { Component } from 'react';
import KittenBox from './KittenBox.jsx';
import KittenInput from './KittenInput.jsx';
import uuid from 'node-uuid';

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      kittens: [
        {
          id: uuid.v4(),
          type: 'fluffy'
        },
        {
          id: uuid.v4(),
          type: 'fat'
        },
        {
          id: uuid.v4(),
          type: 'cute'
        }
      ]
    };

    this.addKitten = this.addKitten.bind(this);
  };
  render() {
    const kittens = this.state.kittens;

    return (
      <div className="app">
        <KittenBox kittens={kittens} />
        <KittenInput addKitten={this.addKitten} />
      </div>
    );
  };
  addKitten(kitten) {
    let newKitten = {
      id: uuid.v4(),
      type: kitten
    };

    this.setState({
      kittens: [ ...this.state.kittens, newKitten ]
    });
  };
}