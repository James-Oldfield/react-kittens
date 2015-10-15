import React, { Component } from 'react';

export default class Kitten extends Component {
  constructor(props) {
    super(props);

    this.finishEdit   = this.finishEdit.bind(this);
    this.checkEnter   = this.checkEnter.bind(this);
    this.edit         = this.edit.bind(this);
    this.renderEdit   = this.renderEdit.bind(this);
    this.renderKitten = this.renderKitten.bind(this);
    this.handleDelete = this.handleDelete.bind(this);

    this.state = {
      editing: false,
      kittenStyles: {
        margin: '5px 0',
        listStyle: 'none',
        color: 'tomato',
        border: 'solid tomato 5px',
        padding: '20px',
        fontSize: '30px',
      },
      inputStyles: {
        fontSize: '20px',
        color: 'tomato'
      }
    };
  };
  render() {
    const editing = this.state.editing;

    const kittenNodes = this.props.kittens.map((kitten, index) => {
      return (
        <div style={this.state.kittenStyles} key={index} className="kittenNode">
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
      <li key={i}> 
        <span onClick={this.edit}>{k.type} 🐱 </span>
        <span id={k.id} onClick={this.handleDelete}>x</span>
      </li>
    );
  };
  renderEdit(k, i) {
    return (
      <input
        style={this.state.inputStyles}
        key={i}
        id={k.id} 
        type="text"
        defaultValue={k.type}
        onBlur={this.finishEdit}
        onKeyPress={this.checkEnter}
      />
    );
  };
  handleDelete(e) {
    this.props.onDelete(e.target.id);
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