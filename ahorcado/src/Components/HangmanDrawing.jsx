import React from 'react';

const HangmanDrawing = ({ wrongGuesses }) => {
  const stages = [
    `
      +---+
          |
          |
          |
          |
          |
    =========
    `,
    `
      +---+
      O   |
          |
          |
          |
          |
    =========
    `,
    `
      +---+
      O   |
      |   |
          |
          |
          |
    =========
    `,
    `
      +---+
      O   |
     /|   |
          |
          |
          |
    =========
    `,
    `
      +---+
      O   |
     /|\\  |
          |
          |
          |
    =========
    `,
    `
      +---+
      O   |
     /|\\  |
     /    |
          |
          |
    =========
    `,
    `
      +---+
      O   |
     /|\\  |
     / \\  |
          |
          |
    =========
    `
  ];

  return (
    <pre style={{ fontSize: '16px', margin: '20px auto' }}>
      {stages[wrongGuesses]}
    </pre>
  );
};

export default HangmanDrawing;
