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
  sortPopularity = () => {
    this.setState({
      contacts: [...this.state.contacts].sort((a, b) => {
        return a.popularity - b.popularity;
      }),
    });
  };
  addRandom = () => {
    let found;

    while (!found && this.state.contacts.length < data.length) {
      // find a random contact that is not already in the state.contacts
      const random = data[Math.floor(Math.random() * data.length)];

      const alreadyExisting = this.state.contacts.find(contact => {
        return contact.id === random.id;
      });

      if (!alreadyExisting) {
        found = random;
      }
      // assign the random contact to `found`
    }

    if (found) {
      this.setState({
        contacts: [found, ...this.state.contacts],
      });
    }
  };

  render() {
    return (
      <div className="App">
        <h1>IronContacts</h1>
        <button onClick={this.addRandom}>FIND RANDOM</button>
        <button onClick={this.sortName}>Sort by name</button>
        <button onClick={this.sortPopularity}>Sort by popularity</button>
        <Contacts contacts={this.state.contacts}></Contacts>
      </div>
    );
  }
}

export default App;
