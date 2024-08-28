import React from 'react';

const Keyboard = ({ guessedLetters, handleGuess, isGameOver, isGameWon }) => {
  const letters = 'abcdefghijklmnñopqrstuvwxyz'.split('');

  return (
    <div style={{ margin: '20px' }}>
      {letters.map((letter) => (
        <button
          key={letter}
          onClick={() => handleGuess(letter)}
          disabled={guessedLetters.includes(letter) || isGameOver || isGameWon}
          style={{
            margin: '5px',
            padding: '10px',
            fontSize: '16px',
            backgroundColor: guessedLetters.includes(letter) ? 'lightgray' : 'white',
            cursor: 'pointer',
          }}
        >
          {letter}
        </button>
      ))}
    </div>
  );
};

export default Keyboard;
