import React, { Component } from 'react';
import { nanoid } from 'nanoid';
import AddForm from './AddForm/AddForm';
import FilterContact from './FilterContact/FilterContact';
import ContactsBook from './ContactsBook/ContactsBook';

class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  hendelChange = e => {
    const { name, value } = e.currentTarget;
    this.setState({
      [name]: value,
    });
  };

  hendelSubmit = e => {
    e.preventDefault();
    const { name, number } = this.state;

    const newContact = {
      id: nanoid(),
      name: name,
      number: number,
    };

    const nameCheck = this.state.contacts.some(contact =>
      contact.name.includes(this.state.name)
    );

    if (nameCheck) {
      alert(`${this.state.name} is already in contacts`);
      return;
    }

    this.addContact(newContact);
  };

  addContact = newContact => {
    this.setState(prevState => ({
      contacts: [...prevState.contacts, newContact],
    }));
  };

  deleteContactId = contactId => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== contactId),
    }));
  };

  filterContacts = () => {
    const { filter, contacts } = this.state;
    const normalized = filter.toLowerCase();

    return contacts.filter(contact =>
      contact.name.toLocaleLowerCase().includes(normalized)
    );
  };

  render() {
    const { filter } = this.state;
    const filteredContacts = this.filterContacts();

    return (
      <>
        <AddForm
          hendelChange={this.hendelChange}
          hendelSubmit={this.hendelSubmit}
        />
        <FilterContact hendelChange={this.hendelChange} filter={filter} />
        <ContactsBook
          filteredContacts={filteredContacts}
          deleteContactId={this.deleteContactId}
        />
      </>
    );
  }
}

export default App;
