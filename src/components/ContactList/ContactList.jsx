import css from './ContactList.module.css';

import Contact from '../Contact/Contact';

export default function ContactList({ filteredContacts, handleDelButton }) {
  return (
    <ul className={css.list}>
      {filteredContacts.map(contact => {
        return (
          <Contact
            key={contact.id}
            contact={contact}
            handleDelButton={handleDelButton}
          />
        );
      })}
    </ul>
  );
}
