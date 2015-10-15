import React, { Component } from 'react';
import KittenBox from './KittenBox.jsx';
import KittenInput from './KittenInput.jsx';
import uuid from 'node-uuid';

export default class App extends Component {
  constructor(props) {
    super(props);

    this.findKitten   = this.findKitten.bind(this);
    this.addKitten    = this.addKitten.bind(this);
    this.onEdit       = this.onEdit.bind(this);
    this.deleteKitten = this.deleteKitten.bind(this);

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
        <KittenBox onEdit={this.onEdit} onDelete={this.deleteKitten} kittens={kittens} />
        <KittenInput addKitten={this.addKitten} />
      </div>
    );
  };
  onEdit(id, type) {
    let kittens = this.state.kittens;
    const kitIndex = this.findKitten(id);

    if(kitIndex >= 0) {
      kittens[kitIndex].type = type;

      this.setState({kittens});
    } else {
      console.warn('kit not found!!!!');
    }
  };
  deleteKitten(id) {
    console.log(id);

    const kittens = this.state.kittens;
    const kitIndex = this.findKitten(id);

    if(kitIndex >= 0) {
      this.setState({
        kittens: kittens.slice(0, kitIndex).concat(kittens.slice(kitIndex +1))
      });
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