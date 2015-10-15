import React, { Component } from 'react';
import KittenBox from './KittenBox.jsx';
import KittenInput from './KittenInput.jsx';
import uuid from 'node-uuid';

export default class App extends Component {
  constructor(props) {
    super(props);

    this.findKitten = this.findKitten.bind(this);
    this.addKitten  = this.addKitten.bind(this);
    this.onEdit     = this.onEdit.bind(this);

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
        <KittenBox onEdit={this.onEdit} kittens={kittens} />
        <KittenInput addKitten={this.addKitten} />
      </div>
    );
  };
  onEdit(id, type) {
    let kittens = this.state.kittens;

    const kitIndex = this.findKitten(id);

    if(kitIndex !== -1) {
      kittens[kitIndex].type = type;

      this.setState({kittens});
    } else {
      console.warn('kit not found!!!!');
    }
  };
  findKitten(id) {
    const kittens = this.state.kittens;
    const kitIndex = kittens.findIndex((kit) => kit.id === id);

    return (kitIndex >= 0) ? kitIndex : -1;
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