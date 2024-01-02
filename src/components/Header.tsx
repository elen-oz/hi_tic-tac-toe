import { Text } from '@chakra-ui/react';

const Header = () => {
  return (
    <Text
      as='h1'
      bgGradient='linear(to-l, #7928CA, #FF0080)'
      bgClip='text'
      fontSize='6xl'
      fontWeight='extrabold'
      textAlign='center'
    >
      Tic-Tac-Toe
    </Text>
  );
};
export default Header;
