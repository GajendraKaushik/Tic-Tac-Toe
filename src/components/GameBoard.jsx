import React, { useState } from "react";

const initialGameBoard = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];
function GameBoard({ onSelectSquare, turns }) {
     
    // if turns is empty
    let gameBoard = initialGameBoard;
   // deriving the state by computing the value
    for(const turn of turns){
        const {square, player} = turn;
        const {row, col} = square;
        gameBoard[row][col] = player;
    }

  // const [gameBoard, setGameBoard] = useState(initialGameBoard)

  // function handleClick(rowIndex, colIndex){
  //     setGameBoard((prevGameBoard =>{
  //         const updatedBoard =[...prevGameBoard.map(innerArray =>[...innerArray])];
  //         updatedBoard[rowIndex][colIndex] =activePlayerSymbol;
  //         return updatedBoard;
  //     }))

  //     onSelectSquare();
  // }

  return (
    <ol id="game-board">
      {gameBoard.map((row, rowIndex) => (
        <li key={rowIndex}>
          <ol>
            {row.map((playerSymbol, colIndex) => (
              <li key={colIndex}>
                <button onClick={()=>onSelectSquare(rowIndex, colIndex)}>{playerSymbol}</button>
              </li>
            ))}
          </ol>
        </li>
      ))}
    </ol>
  );
}

export default GameBoard;
