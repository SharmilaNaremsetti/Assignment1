import React, { useState } from 'react';
import './Matrix.css'; // We'll style the matrix using a CSS file.

const Matrix = () => {
  const [matrix, setMatrix] = useState(Array(9).fill('white'));
  const [clickSequence, setClickSequence] = useState([]);

  const handleClick = (index) => {
    if (matrix[index] === 'white') {
      const newMatrix = [...matrix];
      newMatrix[index] = 'green';
      setMatrix(newMatrix);
      setClickSequence([...clickSequence, index]);

      if (clickSequence.length === 8) {
        changeToOrange([...clickSequence, index], newMatrix);
      }
    }
  };

  const changeToOrange = (sequence, currentMatrix) => {
    sequence.forEach((idx, i) => {
      setTimeout(() => {
        const newMatrix = [...currentMatrix];
        newMatrix[idx] = 'orange';
        setMatrix(newMatrix);
      }, (i + 1) * 500); // Adjust the timing as needed
    });
  };

  return (
    <div className="matrix">
      {matrix.map((color, index) => (
        <div
          key={index}
          className="box"
          style={{ backgroundColor: color }}
          onClick={() => handleClick(index)}
        />
      ))}
    </div>
  );
};

export default Matrix;
