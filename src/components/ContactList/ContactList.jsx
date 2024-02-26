import Contact from '../Contact/Contact';

export default function ContactList({ filteredContacts }) {
  return (
    <ul>
      {filteredContacts.map(contact => {
        return <Contact key={contact.id} contact={contact} />;
      })}
    </ul>
  );
}
