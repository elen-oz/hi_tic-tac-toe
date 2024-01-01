import {
  Box,
  Button,
  Container,
  HStack,
  Heading,
  List,
  ListItem,
  Text,
} from '@chakra-ui/react';
import { useState } from 'react';

interface PropsSquare {
  value: string;
  onSquareClick: (i: number) => void;
}

const Square = ({ value, onSquareClick }: PropsSquare) => {
  return (
    <Button
      border='1px'
      width={100}
      height={100}
      fontSize='5xl'
      onClick={onSquareClick}
    >
      {value}
    </Button>
  );
};

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
  // }

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
    console.log('clicked: ', nextSquares);
  };

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
      <HStack justify='center' spacing={0}>
        <Square value={squares[0]} onSquareClick={() => onSquareClick(0)} />
        <Square value={squares[1]} onSquareClick={() => onSquareClick(1)} />
        <Square value={squares[2]} onSquareClick={() => onSquareClick(2)} />
      </HStack>

      <HStack justify='center' spacing={0}>
        <Square value={squares[3]} onSquareClick={() => onSquareClick(3)} />
        <Square value={squares[4]} onSquareClick={() => onSquareClick(4)} />
        <Square value={squares[5]} onSquareClick={() => onSquareClick(5)} />
      </HStack>

      <HStack justify='center' spacing={0}>
        <Square value={squares[6]} onSquareClick={() => onSquareClick(6)} />
        <Square value={squares[7]} onSquareClick={() => onSquareClick(7)} />
        <Square value={squares[8]} onSquareClick={() => onSquareClick(8)} />
      </HStack>
    </>
  );
};

const Game = () => {
  return (
    <>
      <Container>
        <Heading textAlign='center' my='30px'>
          Tic-Tac-Toe Game
        </Heading>
        <Box>
          <Board />
        </Box>
        <Box textAlign='center' mt={7}>
          <List>
            <ListItem>item</ListItem>
          </List>
        </Box>
      </Container>
    </>
  );
};

function App() {
  return (
    <>
      <Game />
    </>
  );
}

function calculateWinner(squares: [][]) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}

export default App;
