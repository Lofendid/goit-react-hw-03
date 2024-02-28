import css from './App.module.css';

import contactsData from '../../data/contacts.json';

import ContactForm from '../ContactForm/ContactForm';
import SearchBox from '../SearchBox/SearchBox';
import ContactList from '../ContactList/ContactList';

import { useState } from 'react';

function App() {
  const [contacts, setContacts] = useState(() => {
    const contactsFromLS = JSON.parse(localStorage.getItem('contacts'));

    return contactsFromLS || contactsData;
  });
  const [value, setValue] = useState('');

  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().trim().includes(value.toLowerCase().trim())
  );

  function handleDelButton(e) {
    const butId = e.target.id;
    const filteredContacts = contacts.filter(contact => contact.id !== butId);
    setContacts(filteredContacts);
    localStorage.setItem('contacts', JSON.stringify(filteredContacts));
  }

  return (
    <div className={css.container}>
      <h1 className={css.containerItem}>Phonebook</h1>

      <div className={css.containerItem}>
        <ContactForm setContacts={setContacts} contacts={contacts} />
      </div>

      <div className={css.containerItem}>
        <SearchBox value={value} setValue={setValue} />
      </div>

      <div className={css.containerItem}>
        <ContactList
          value={value}
          setValue={setValue}
          filteredContacts={filteredContacts}
          handleDelButton={handleDelButton}
        />
      </div>
    </div>
  );
}

export default App;
