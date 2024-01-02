import { useState } from 'react';
import { Box, List, ListItem } from '@chakra-ui/react';
import Board from './Board';

type Square = string | null;

const Game = () => {
  const [xIsNext, setXIsNext] = useState(true);
  const [history, setHistory] = useState<Square[][] | null>([
    Array(9).fill(null),
  ]);

  let currentSquares;

  if (history) {
    currentSquares = history[history.length - 1];
  }

  const handlePlay = (nextSquares: Square[]) => {
    setHistory((prevHistory) =>
      prevHistory ? [...prevHistory, nextSquares] : [nextSquares]
    );

    setXIsNext(!xIsNext);
  };

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
        <List>
          <ListItem>item</ListItem>
        </List>
      </Box>
    </Box>
  );
};

export default Game;
