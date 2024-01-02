import { Box, Link } from '@chakra-ui/react';

const Footer = () => {
  return (
    <Box as='footer' textAlign='center' py={3}>
      <Link
        href='https://github.com/elen-oz/tic-tac-toe-game'
        color='teal.500'
        isExternal
      >
        source code
      </Link>
    </Box>
  );
};
export default Footer;
