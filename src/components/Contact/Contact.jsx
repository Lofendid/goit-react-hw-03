export default function Contact({ contact: { id, name, number } }) {
  return (
    <li key={id}>
      <p>{name}</p>
      <p>{number}</p>
      <button type="button">Delete</button>
    </li>
  );
}
