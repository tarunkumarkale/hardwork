


import React, { useRef } from 'react';

function ButtonWithRef() {
  // Creating a ref to hold the button element
  const buttonRef = useRef();

  // Function to change the text content of the button
  const changeButtonText = () => {
    // Accessing the current property of the ref to get the button element
    const button = buttonRef.current;

    // Changing the text content of the button
    button.textContent = 'Text Changed!';
  };

  return (
    <div>
      {/* The button element with the ref */}
      <button ref={buttonRef} onClick={changeButtonText}>
        Click me to change text
      </button>
    </div>
  );
}

export default ButtonWithRef;

