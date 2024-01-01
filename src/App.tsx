import {
  Box,
  Button,
  Center,
  Container,
  HStack,
  Heading,
} from '@chakra-ui/react';
// import { useState } from 'react';

// interface PropsSquare {
//   value: number;
//   onSquareClick: () => {};
// }

// const Square = ({ value, onSquareClick }) => {};

const Board = () => {
  return (
    <>
      <HStack justify='center' spacing={0}>
        <Button border='1px' width={100} height={100} fontSize='5xl'>
          1
        </Button>
        <Button border='1px' width={100} height={100} fontSize='5xl'>
          2
        </Button>
        <Button border='1px' width={100} height={100} fontSize='5xl'>
          3
        </Button>
      </HStack>

      <HStack justify='center' spacing={0}>
        <Button border='1px' width={100} height={100} fontSize='5xl'>
          4
        </Button>
        <Button border='1px' width={100} height={100} fontSize='5xl'>
          5
        </Button>
        <Button border='1px' width={100} height={100} fontSize='5xl'>
          6
        </Button>
      </HStack>

      <HStack justify='center' spacing={0}>
        <Button border='1px' width={100} height={100} fontSize='5xl'>
          7
        </Button>
        <Button border='1px' width={100} height={100} fontSize='5xl'>
          8
        </Button>
        <Button border='1px' width={100} height={100} fontSize='5xl'>
          9
        </Button>
      </HStack>
    </>
  );
};

function App() {
  // const [count, setCount] = useState(0);

  return (
    <>
      <Container>
        <Heading textAlign='center' my='30px'>
          Tic-Tac-Toe Game
        </Heading>
        <Board />
      </Container>
    </>
  );
}

export default App;
