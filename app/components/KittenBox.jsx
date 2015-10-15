import React, { Component } from 'react';
import Kitten from './Kitten.jsx';

export default class KittenBox extends Component {
  render() {
    return (
      <Kitten onEdit={this.props.onEdit} onDelete={this.props.onDelete} kittens={this.props.kittens} />
    );
  };
};