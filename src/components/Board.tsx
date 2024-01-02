import { useState } from 'react';
import calculateWinner from '../utils/utils';
import { Box, HStack, Text } from '@chakra-ui/react';
import Square from './Square';

const Board = () => {
  const [squares, setSquares] = useState(Array(9).fill(null));
  const [xIsNext, setXIsNext] = useState(true);

  let status: string;
  const winner = calculateWinner(squares);

  if (!squares.includes(null)) {
    status = 'Draw!!';
    return;
  }
  status = xIsNext ? 'X' : 'O';

  const onSquareClick = (i: number) => {
    if (squares[i] || calculateWinner(squares)) {
      return;
    }

    const nextSquares = squares.slice();

    if (xIsNext) {
      nextSquares[i] = 'X';
    } else {
      nextSquares[i] = 'O';
    }

    setSquares(nextSquares);
    setXIsNext(!xIsNext);
  };

  const renderRow = (rowIndex: number) => (
    <HStack key={rowIndex} justify='center' spacing={0}>
      {[0, 1, 2].map((colIndex) => (
        <Square
          key={colIndex}
          value={squares[rowIndex * 3 + colIndex]}
          onSquareClick={() => onSquareClick(rowIndex * 3 + colIndex)}
        />
      ))}
    </HStack>
  );

  return (
    <>
      <Box textAlign='center' mb={1}>
        <Text as='b' fontSize='2xl'>
          {winner && `🏆 Winner: ${winner} 🏆`}
        </Text>
      </Box>
      <Box textAlign='center' mb={5}>
        {!winner && `Next player: ${status}`}
      </Box>
      {[0, 1, 2].map((rowIndex) => renderRow(rowIndex))}
    </>
  );
};

export default Board;
