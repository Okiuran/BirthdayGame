import React, { useState } from 'react';
import WordDisplay from './Components/WordDisplay';
import Keyboard from './Components/Keyboard';
import GameOver from './Components/GameOver';
import HangmanDrawing from './Components/HangmanDrawing';

const App = () => {
  const secretMessage = "vandhal es la persona que mas quiero en este mundo";
  const [guessedLetters, setGuessedLetters] = useState([]);
  const [wrongGuesses, setWrongGuesses] = useState(0);
  const maxWrongGuesses = 6;

  const handleGuess = (letter) => {
    if (guessedLetters.includes(letter)) return;

    setGuessedLetters([...guessedLetters, letter]);

    if (!secretMessage.includes(letter)) {
      setWrongGuesses(wrongGuesses + 1);
    }
  };

  const isGameOver = wrongGuesses >= maxWrongGuesses;
  const isGameWon = secretMessage.split('').every(
    (letter) => letter === ' ' || guessedLetters.includes(letter)
  );

  const resetGame = () => {
    setGuessedLetters([]);
    setWrongGuesses(0);
  };

  return (
    <div style={{ textAlign: 'center', fontFamily: 'Arial' }}>
      <HangmanDrawing wrongGuesses={wrongGuesses} />
      <WordDisplay secretMessage={secretMessage} guessedLetters={guessedLetters} />
      <p>Intentos: {wrongGuesses}/{maxWrongGuesses}</p>
      
      {!isGameOver && !isGameWon && (
        <Keyboard
          guessedLetters={guessedLetters}
          handleGuess={handleGuess}
          isGameOver={isGameOver}
          isGameWon={isGameWon}
        />
      )}
      
      {isGameOver && (
        <GameOver
          isGameWon={isGameWon}
          secretMessage={secretMessage}
          resetGame={resetGame}
        />
      )}

      {isGameWon && (
        <p style={{ color: 'black', fontSize: '24px' }}>Has adivinado el mensaje, feliz cumpleaños :3</p>
      )}
    </div>
  );
};

export default App;
