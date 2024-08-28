import React from 'react';

const WordDisplay = ({ secretMessage, guessedLetters }) => {
  const renderWord = () => {
    return secretMessage.split(' ').map((word, index) => (
      <span key={index} style={{ marginRight: '10px' }}>
        {word.split('').map((letter, index) => (
          <span key={index}>
            {guessedLetters.includes(letter) ? letter : '_ '}
          </span>
        ))}
      </span>
    ));
  };

  return (
    <p style={{ whiteSpace: 'pre' }}>Mensaje: {renderWord()}</p>
  );
};

export default WordDisplay;
