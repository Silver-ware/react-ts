import { useState } from "react";
import Layout from "../Components/Layout";
import TurnIcon from "/icons/turn.gif"

type Player = "X" | "O" | null;

type BoardState = Player[];

const TicTacToe = () => {
  const [board, setBoard] = useState<BoardState>(Array(9).fill(null));
  const [currentPlayer, setCurrentPlayer] = useState<Player>("X");
  const [winner, setWinner] = useState<Player>(null);

  const checkWinner = (newBoard: BoardState) => {
    const winningCombinations = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];

    for (const combo of winningCombinations) {
      const [a, b, c] = combo;
      if (newBoard[a] && newBoard[a] === newBoard[b] && newBoard[a] === newBoard[c]) {
        return newBoard[a];
      }
    }
    return null;
  };

  const handleClick = (index: number) => {
    if (board[index] || winner) return;
    const newBoard = [...board];
    newBoard[index] = currentPlayer;
    setBoard(newBoard);
    const gameWinner = checkWinner(newBoard);
    if (gameWinner) {
      setWinner(gameWinner);
    } else {
      setCurrentPlayer(currentPlayer === "X" ? "O" : "X");
    }
  };

  const resetGame = () => {
    setBoard(Array(9).fill(null));
    setCurrentPlayer("X");
    setWinner(null);
  };

  return (
    <Layout>
      <div className="relative flex flex-col items-center justify-center h-full w-full bg-amber-300">
        <h1 className="text-3xl font-bold text-amber-900 mb-4 drop-shadow-lg">Tic-Tac-Toe</h1>
        <div className="absolute left-[10%] uppercase font-bold text-amber-900 flex flex-col text-center">
          <span className="text-lg drop-shadow-lg">Player 1</span>
          <span className="font-extrabold text-2xl">X</span>
        </div>
        <div className="grid grid-cols-3 gap-2 bg-amber-600 p-4 rounded-lg shadow-lg shadow-amber-700">
          {board.map((cell, index) => (
            <button key={index}
              onClick={() => handleClick(index)}
              className="w-20 h-20 flex items-center justify-center text-3xl font-bold bg-amber-200 border-2 border-amber-600 rounded-md shadow-md hover:bg-amber-500 transition-all">
              {cell}
            </button>
          ))}
        </div>
        <div className="absolute right-[10%] uppercase font-bold text-amber-900 flex flex-col text-center">
          <span className="text-lg drop-shadow-lg">Player 2</span>
          <span className="font-extrabold text-2xl">O</span>
        </div>
        <div className={`${currentPlayer === "O" ? 'right-[10%] ' : 'left-[10%]'} absolute h-[50px] w-[85px] translate-y-[120%] flex justify-center border-t-2 border-amber-800
          transition-all duration-1000 ease-in-out`}>
          <img src={TurnIcon} className="h-[50px] aspect-square drop-shadow-2xl" alt="Turn Icon" />
        </div>
        {winner && <p className="text-2xl text-amber-900 mt-4">Winner: {winner}</p>}
        <button onClick={resetGame} className="mt-6 px-4 py-2 bg-amber-600 text-white font-semibold rounded-lg shadow-md shadow-amber-700 hover:bg-amber-700 transition-all">
          Restart
        </button>
      </div>
    </Layout>
  );
};

export default TicTacToe;
