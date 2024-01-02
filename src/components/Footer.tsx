import { Box, Link, Text } from '@chakra-ui/react';

const Footer = () => {
  return (
    <Box as='footer' textAlign='center'>
      <Link href='https://github.com/elen-oz/tic-tac-toe-game' isExternal>
        <Text bgGradient='linear(to-l, #7928CA, #FF0080)' bgClip='text'>
          source code
        </Text>
      </Link>
    </Box>
  );
};
export default Footer;
