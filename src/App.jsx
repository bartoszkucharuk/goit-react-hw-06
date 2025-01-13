import { useState, useEffect } from 'react';
import './App.css';

import SearchBox from "./components/SearchBox";
import ContactForm from "./components/ContactForm";
import ContactList from "./components/ContactList";

const initialContacts = [
  {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
  {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
  {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
  {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},
];

function App() {
  const [contacts, setContacts] = useState(() => {
  const savedContacts = window.localStorage.getItem("saved-contacts");
    return savedContacts ? JSON.parse(savedContacts) : initialContacts;
  });

  useEffect(() => {
    window.localStorage.setItem("saved-contacts", JSON.stringify(contacts));
  }, [contacts]);
// ______________________________________________________________________________
  const [contactFilter, setContactFilter] = useState("");

  const deleteContact = (id) => {
    console.log("delete contact", id);
    setContacts((prev) => prev.filter((contact) => contact.id !== id));
  };

  const addContact = newContact => {
    setContacts(prev => [...prev, newContact]);
  };

  const handleFilterChange = e => {
    setContactFilter(e.target.value);
  };

  const filteredContacts = contacts.filter(contact => contact.name.toLowerCase().includes(contactFilter.toLocaleLowerCase())
  );

  return (
    <>
      <h1>Phonebook</h1>
      <ContactForm addContact={addContact} />
      <SearchBox handleFilterChange={handleFilterChange} value={contactFilter} />
      <ContactList contacts={filteredContacts} deleteContact={deleteContact} />
    </>
  )
}

export default App
