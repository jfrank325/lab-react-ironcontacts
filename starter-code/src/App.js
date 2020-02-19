import React, { Component } from 'react';
import './App.css';
import Contacts from './Contact';
import data from './contacts.json';

class App extends Component {
  state = { contacts: data.slice(0, 5) };

  random = () => {
    return Math.floor(Math.random() * 10);
  };
  addClicked = () => {
    this.setState({ contacts: [...this.state.contacts, data[this.random()]] });
  };
  sortName = () => {
    this.setState({
      contacts: [...this.state.contacts].sort((a, b) => {
        return a.name.localeCompare(b.name);
      }),
    });
  };
  render() {
    return (
      <div className="App">
        <h1>IronContacts</h1>
        <button onClick={this.addClicked}>FIND RANDOM</button>
        <button onClick={this.sortName}>Sort by name</button>
        <Contacts contacts={this.state.contacts}></Contacts>
      </div>
    );
  }
}

export default App;
