import React from 'react';

const getRandomNumber = () => {
  const number = Math.floor(Math.random() * 100);
  return parseInt(number);
};

const App = () => {

  const [number, setNumber] = React.useState(getRandomNumber());
  const [attempt, setAttempt] = React.useState(0);
  const [guess, setGuess] = React.useState('');
  const [result, setResult] = React.useState('');

  const handleGuessChange = (e) => {
    setGuess(e.target.value);
  };

  const handleTryClick = () => {
    const integerGuess = parseInt(guess);
    if (integerGuess === number) {
      setResult('You find the number...gooood boy. Try again!');
    }
    else if (integerGuess < number) {
      setAttempt(attempt + 1);
      setResult('My number is bigger');
    }
    else {
      setAttempt(attempt + 1);
      setResult('My number is smaller');
    }
    setGuess('');
  };

  return (
    <div>
      <div>
        <label>Your guess:</label>
        <input
          value={guess}
          onChange={handleGuessChange}
          type="number"
        />
      </div>
      <div>
        <button
          onClick={handleTryClick}
          disabled={guess === ''}
        >
          Try!
        </button>
      </div>
      <div>
        <h3>Attempt number: {attempt}</h3>
      </div>
      <div>
        <h3>{result}</h3>
      </div>
    </div>
  )
};

export default App;