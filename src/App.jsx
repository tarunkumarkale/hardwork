
import React, { useRef } from 'react';

function App() {
  // Creating refs for the input and output elements
  const inputRef = useRef();
  const outputRef = useRef();

  // Function to handle button click and display inputted data
  const showData = () => {
    const inputValue = inputRef.current.value;
    outputRef.current.textContent = `You entered: ${inputValue}`;
  };

  return (
    <div>
      {/* Input field with ref */}
      <input type="text" ref={inputRef} placeholder="Type something..." />

      {/* Button to trigger the showData function */}
      <button onClick={showData}>Show Data</button>

      {/* Output area with ref to display the entered data */}
      <div ref={outputRef}></div>
    </div>
  );
}

export default App;
