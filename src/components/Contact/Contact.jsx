import css from './Contact.module.css';

export default function Contact({
  contact: { id, name, number },
  handleDelButton,
}) {
  return (
    <li key={id}>
      <div className={css.listItem}>
        <div className={css.contactInfo}>
          <p>{name}</p>
          <a className={css.number} href={`tel:+${number}`}>
            <p>{number}</p>
          </a>
        </div>
        <button id={id} type="button" onClick={handleDelButton}>
          Delete
        </button>
      </div>
    </li>
  );
}
