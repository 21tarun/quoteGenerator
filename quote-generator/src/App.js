
import './App.css';
import React, { useState } from 'react';
import quotes from './Quotes';

function App() {
  const [quote, setQuote] = useState('');

  const generateRandomQuote = () => {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    const randomQuote = quotes[randomIndex];
    setQuote(randomQuote);
  };
  return (
    <div className="App">
      <h1>Random Quote Generator</h1>
      <button onClick={generateRandomQuote}>Generate Quote</button>
      {quote && (
        <div>
          <p>{quote.quote}</p>
          <p>- {quote.author}</p>
        </div>
      )}
    </div>
  );
}

export default App;
