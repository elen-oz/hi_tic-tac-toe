import { Button } from '@chakra-ui/react';

interface Props {
  value: null | string;
  onSquareClick: () => void;
}

const Square = ({ value, onSquareClick }: Props) => {
  return (
    <Button
      bgGradient='linear(to-l, #7928CA, #FF0080)'
      bgClip='text'
      border='1px'
      borderColor='gray.200'
      _hover={{ borderColor: 'pink.600' }}
      width={100}
      height={100}
      fontSize='5xl'
      onClick={onSquareClick}
    >
      {value}
    </Button>
  );
};

export default Square;
