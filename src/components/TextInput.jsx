export default function TextInput({
  labelDescription = 'Label Description:',
  inputValue = 'Default Input Value',
  onInputChange = null,
  autoFocus = false,
}) {
  function handleInputChange({ currentTarget }) {
    if (onInputChange) {
      const newValue = currentTarget.value;
      onInputChange(newValue);
    }
  }
  return (
    <div className="flex flex-col my-4">
      <label htmlFor="inputText" className="mb-1 text-sm">
        {labelDescription}
      </label>
      <input
        autoFocus={autoFocus}
        id="inputText"
        className="border p-1"
        type="text"
        value={inputValue}
        onChange={handleInputChange}
      ></input>
    </div>
  );
}
