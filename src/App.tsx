import { Box, Flex, Heading, Link, Spacer } from '@chakra-ui/react';
import Game from './components/Game';

function App() {
  return (
    <>
      <Flex direction='column' justify='space-between' minHeight='100vh'>
        <Heading textAlign='center' my='30px'>
          Tic-Tac-Toe
        </Heading>

        <Game />

        <Box as='footer' textAlign='center' py={3}>
          <Link
            href='https://github.com/elen-oz/tic-tac-toe-game'
            color='teal.500'
            isExternal
          >
            source code
          </Link>
        </Box>
      </Flex>
    </>
  );
}

export default App;
