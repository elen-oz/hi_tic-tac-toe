import { Box, List, ListItem } from '@chakra-ui/react';
import Board from './Board';

const Game = () => {
  return (
    <Box as='main'>
      <Box>
        <Board />
      </Box>
      {/* <Box textAlign='center' mt={7}>
        <List>
          <ListItem>item</ListItem>
        </List>
      </Box> */}
    </Box>
  );
};

export default Game;
