import React, { Component } from 'react';

export default class Kitten extends Component {
  constructor(props) {
    super(props);

    this.finishEdit   = this.finishEdit.bind(this);
    this.checkEnter   = this.checkEnter.bind(this);
    this.edit         = this.edit.bind(this);
    this.renderEdit   = this.renderEdit.bind(this);
    this.renderKitten = this.renderKitten.bind(this);

    this.state = {
      editing: false
    };
  };
  render() {
    const editing = this.state.editing;

    const kittenNodes = this.props.kittens.map((kitten, index) => {
      return (
        <div key={index} className="kittenNode">
          { editing ? this.renderEdit(kitten, index) : this.renderKitten(kitten, index) }
        </div>
      );
    });

    return (
      <div className="kittens">
        <ul>
          {kittenNodes}
        </ul>
      </div>
    );
  };
  renderKitten(k, i) {
    return (
      <li key={i} onClick={this.edit}> {k.type} 🐱 </li>
    );
  };
  renderEdit(k, i) {
    return (
      <input
        key={i}
        id={k.id} 
        type="text"
        defaultValue={k.type}
        onBlur={this.finishEdit}
        onKeyPress={this.checkEnter}
      />
    );
  };
  edit() {
    this.setState({
      editing: true
    });
  };
  checkEnter(e) {
    if(e.key === 'Enter') {
      this.finishEdit(e);
    }
  };
  finishEdit(e) {
    this.props.onEdit(e.target.id, e.target.value);

    this.setState({
      editing: false
    });
  };
}