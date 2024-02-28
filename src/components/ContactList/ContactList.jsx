import Contact from '../Contact/Contact';

export default function ContactList({ filteredContacts, handleDelButton }) {
  return (
    <ul>
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
