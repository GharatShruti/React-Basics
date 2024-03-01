import { useState } from 'react';
import './App.css'; // Import CSS file

function App() {
  const [inputValue, setInputValue] = useState('1'); // Initialize input value to '1'

  const handleChange = (event) => {
    setInputValue(event.target.value);
  };


  const handleButtonClick = (value) => {
    let newValue;
    switch (value) {
      case '1':
        newValue = parseInt(inputValue) + 1; // Add 1 to the current value
        break;
      case '2':
        newValue = parseInt(inputValue) - 1; // Subtract 1 from the current value
        break;
      case '3':
        newValue = parseInt(inputValue) + 10; // Add 10 to the current value
        break;
      case '4':
        newValue = parseInt(inputValue) - 10; // Subtract 10 from the current value
        break;
      default:
        break;
    }
    setInputValue(newValue.toString()); // Update input value
  };

  return (
    <div className="container">
      <input
        type="text"
        value={inputValue}
        onChange={handleChange}
        className="input-box"
      />
      <br />
      <button onClick={() => handleButtonClick('1')} className="button">+1</button>
      <button onClick={() => handleButtonClick('2')} className="button">-1</button>
      <button onClick={() => handleButtonClick('3')} className="button">+10</button>
      <button onClick={() => handleButtonClick('4')} className="button">-10</button>
    </div>
  );
}

export default App;
