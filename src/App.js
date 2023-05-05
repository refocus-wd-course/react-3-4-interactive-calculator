import React, { useState, useEffect, useRef } from 'react';
import './App.css';
 
function App() {

  // STEP 2: define useState of num1 and num2 here
  const [num1, setNum1] = useState('');
  const [num2, setNum2] = useState('');
  // STEP 6: define useState of result here
  const [result, setResult] = useState('');


  // STEP 3: define the handleNum1Change and handleNum2Change
  const handleNum1Change  = (event) => {
    setNum1(event.target.value);
    console.log(num1);

  }

  const handleNum2Change  = (event) => {
    setNum2(event.target.value);
    console.log(num2);
  }

  // STEP 5: define the handleAddition, handleSubtraction, handleMultiplication and handleDivision
  const handleAddition = () => {
    const result = Number(num1) + Number(num2);
    setResult(result);
  }

  const handleSubtraction = () => {
    const result = Number(num1) - Number(num2);
    setResult(result);
  }

  const handleMultiplication = () => {
    const result = Number(num1) * Number(num2);
    setResult(result);
  }

  const handleDivision = () => {
    const result = Number(num1) / Number(num2);
    setResult(result);
  }

  

 
  return (
    <div className="App">
      <header className="App-header">
        <h1>Simple Calculator App</h1>
        {/* STEP 1: Create two inputs here that will accept numbers and add onChange handlers - handleNum1Change and handleNum2Change*/}
        <input type='number' onChange={handleNum1Change} />
        <input type='number' onChange={handleNum2Change} />

        {/* STEP 4: Create four buttons with onClick handlers here for the addition, subtraction, multiplication and division */}
        <button onClick={handleAddition}>+</button>
        <button onClick={handleSubtraction}>-</button>
        <button onClick={handleMultiplication}>*</button>
        <button onClick={handleDivision}>/</button>

        <h2>Result: {result}</h2>

      </header>
    </div>
  );
}
 
export default App;
