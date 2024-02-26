// import css from './App.module.css'

import contactsData from '../../data/contacts.json';

import ContactForm from '../ContactForm/ContactForm';
import SearchBox from '../SearchBox/SearchBox';
import ContactList from '../ContactList/ContactList';
import { useState } from 'react';

function App() {
  const [contacts, setContacts] = useState(contactsData);
  const [value, setValue] = useState('');

  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().trim().includes(value.toLowerCase().trim())
  );

  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm setContacts={setContacts} />
      <SearchBox value={value} setValue={setValue} />
      <ContactList
        value={value}
        setValue={setValue}
        filteredContacts={filteredContacts}
      />
    </div>
  );
}

export default App;
