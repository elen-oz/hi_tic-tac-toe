import { useState } from 'react';
import { Box, Button, List, ListItem } from '@chakra-ui/react';
import Board from './Board';

type Square = string | null;

const Game = () => {
  // const [xIsNext, setXIsNext] = useState(true);
  const [history, setHistory] = useState<Square[][] | null>([
    Array(9).fill(null),
  ]);
  const [currentMove, setCurrentMove] = useState(0);
  // const currentSquares = history[currentMove];
  const xIsNext = currentMove % 2 === 0;
  let currentSquares;

  if (history) {
    currentSquares = history[currentMove];
  }

  const handlePlay = (nextSquares: Square[]) => {
    // setHistory((prevHistory) =>
    //   prevHistory ? [...prevHistory, nextSquares] : [nextSquares]
    // );
    let nextHistory: Square[][] | null;
    if (history) {
      nextHistory = [...history.slice(0, currentMove + 1), nextSquares];
      setHistory(nextHistory);
      setCurrentMove(nextHistory.length - 1);
    }

    // setXIsNext(!xIsNext);
  };

  const jumpTo = (nextMove: number) => {
    setCurrentMove(nextMove);
    // setXIsNext(nextMove % 2 === 0);
  };

  const moves = history?.map((squares, move) => {
    let description: string;
    if (move > 0) {
      description = 'Go to move #' + move;
    } else {
      description = 'Go to game start';
    }
    return (
      // <li key={move}>
      //   <Button onClick={() => jumpTo(move)}>{description}</Button>
      // </li>
      <ListItem key={move}>
        <Button onClick={() => jumpTo(move)}>{description}</Button>
      </ListItem>
    );
  });

  return (
    <Box as='main'>
      <Box>
        {currentSquares && (
          <Board
            xIsNext={xIsNext}
            squares={currentSquares}
            onPlay={handlePlay}
          />
        )}
      </Box>
      <Box textAlign='center' mt={7}>
        <List>{moves}</List>
      </Box>
    </Box>
  );
};

export default Game;
