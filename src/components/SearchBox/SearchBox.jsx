export default function SearchBox({ value, setValue }) {
  function handleChange(e) {
    setValue(e.target.value);
  }
  return <input type="text" value={value} onChange={handleChange} />;
}
