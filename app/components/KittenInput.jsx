import React, { Component } from 'react';

export default class KittenInput extends Component {
  constructor(props) {
    super(props);

    this.state = {
      newKitten: 'new kitten type...'
    };

    this.kittenStateSetter = this.kittenStateSetter.bind(this);
    this.handleNewKitten = this.handleNewKitten.bind(this);
  };
  render() {
    return (
      <div className="newKittenInput">
        <input 
          type="text"
          value={this.state.newKitten}
          onChange={this.kittenStateSetter}
        />
        <button onClick={this.handleNewKitten}>ADD</button>
      </div>
    );
  };
  kittenStateSetter(e) {
    this.setState({
      newKitten: e.target.value
    });
  };
  handleNewKitten() {
    this.props.addKitten(this.state.newKitten);
    this.setState({
      newKitten: 'new kitten type...'
    });
  }
};