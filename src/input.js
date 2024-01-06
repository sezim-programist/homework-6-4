import React, { useRef } from 'react';

function InputExample() {
  const inputRef = useRef(null);

  const handleButtonClick = () => {
    alert(`Input value: ${inputRef.current.value}`);
  };

  return (
    <div>
      <input ref={inputRef} type="text" />
      <button onClick={handleButtonClick}>Get Input Value</button>
    </div>
  );
}

export default InputExample;