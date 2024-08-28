import React, { useState } from 'react';

const GameOver = ({ isGameWon, resetGame }) => {
  const [showSadFace, setShowSadFace] = useState(false);

  const handleNoClick = () => {
    setShowSadFace(true);
  };

  return (
    <div>
      {showSadFace ? (
        <p style={{ fontSize: '24px' }}>:(</p>
      ) : (
        <>
          {isGameWon ? (
            <p style={{ color: 'green', fontSize: '24px' }}>Has adivinado el mensaje, feliz cumpleaños :3</p>
          ) : (
            <div>
              <p style={{ color: 'red', fontSize: '24px' }}>Perdiste~</p>
              <p>¿Quieres volver a intentarlo?</p>
              <button onClick={resetGame} style={{ padding: '10px', fontSize: '16px', marginRight: '10px' }}>
                Sí
              </button>
              <button onClick={handleNoClick} style={{ padding: '10px', fontSize: '16px' }}>
                No
              </button>
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default GameOver;
