export default function Contact({
  contact: { id, name, number },
  handleDelButton,
}) {
  return (
    <li key={id}>
      <p>{name}</p>
      <p>{number}</p>
      <button id={id} type="button" onClick={handleDelButton}>
        Delete
      </button>
    </li>
  );
}
