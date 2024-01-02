import { useState } from 'react';
import { Box, Button, List, ListItem } from '@chakra-ui/react';
import Board from './Board';

type Square = string | null;

const Game = () => {
  const [history, setHistory] = useState<Square[][] | null>([
    Array(9).fill(null),
  ]);
  const [currentMove, setCurrentMove] = useState(0);

  const xIsNext = currentMove % 2 === 0;

  let currentSquares;
  if (history) {
    currentSquares = history[currentMove];
  }

  const handlePlay = (nextSquares: Square[]) => {
    let nextHistory: Square[][] | null;
    if (history) {
      nextHistory = [...history.slice(0, currentMove + 1), nextSquares];
      setHistory(nextHistory);
      setCurrentMove(nextHistory.length - 1);
    }
  };

  const jumpTo = (nextMove: number) => {
    setCurrentMove(nextMove);
  };

  const moves = history?.map((_squares, move) => {
    let description: string;
    if (move > 0) {
      description = 'Go to move #' + move;
    } else {
      description = 'Go to game start';
    }
    return (
      <ListItem key={move} my={1}>
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
