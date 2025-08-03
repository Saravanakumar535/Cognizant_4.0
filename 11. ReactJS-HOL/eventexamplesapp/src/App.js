import React, { useState } from 'react';

function App() {
  const [count, setCount] = useState(0);
  const [amount, setAmount] = useState('');
  const [converted, setConverted] = useState('');
  const [message, setMessage] = useState('');

  // Task 1: Counter methods
  const increment = () => {
    setCount(count + 1);
    console.log("Hello! Counter increased.");
  };

  const decrement = () => {
    setCount(count - 1);
  };

  // Task 2: Welcome message function
  const sayWelcome = (msg) => {
    alert(`Welcome! ${msg}`);
  };

  // Task 3: Synthetic event
  const onPressEvent = (event) => {
    console.log("Synthetic Event:", event);
    alert("I was clicked");
  };

  // Task 4: Currency conversion
  const handleCurrencyChange = (e) => {
    setAmount(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const euro = parseFloat(amount) * 0.011; // ₹ to €
    setConverted(`Converted Amount: € ${euro.toFixed(2)}`);
  };

  return (
    <div style={{ padding: '20px' }}>
      <h1>React Events Hands-on</h1>

      {/* Counter Section */}
      <h2>Counter: {count}</h2>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement} style={{ marginLeft: '10px' }}>Decrement</button>

      <hr />

      {/* Welcome Message Button */}
      <h2>Say Welcome Button</h2>
      <button onClick={() => sayWelcome("React Learner")}>Say Welcome</button>

      <hr />

      {/* Synthetic Event */}
      <h2>Synthetic Event</h2>
      <button onClick={onPressEvent}>OnPress</button>

      <hr />

      {/* Currency Converter */}
      <h2 style={{ color: "green" }}>Currency Convertor!!!</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Amount (INR):&nbsp;
          <input type="number" value={amount} onChange={handleCurrencyChange} />
        </label>
        <button type="submit" style={{ marginLeft: '10px' }}>Convert</button>
      </form>
      <p>{converted}</p>
    </div>
  );
}

export default App;
