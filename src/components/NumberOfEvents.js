const NumberOfEvents = ({ setCurrentNOE, setErrorAlert }) => {
  const handleInputChanged = (event) => {
    const value = event.target.value;

    if (isNaN(value)) {
      setErrorAlert('Please enter a positive number.');
    } else if (value > 50) {
      setErrorAlert('Value cannot exceed 50.');
    } else if (value <= 0) {
      setErrorAlert('Value must be at least 1.');
    } else {
      setErrorAlert('');
      setCurrentNOE(value);
    }
  };

  return (
    <div id="number-of-events">
      <input
        type="text"
        defaultValue="32"
        onChange={handleInputChanged}
        data-testid="numberOfEventsInput"
      />
    </div>
  );
};

export default NumberOfEvents;
