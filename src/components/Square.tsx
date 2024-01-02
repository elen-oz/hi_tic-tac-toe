import { Button } from '@chakra-ui/react';

interface Props {
  value: null | string;
  onSquareClick: () => void;
}

const Square = ({ value, onSquareClick }: Props) => {
  return (
    <Button
      color='pink.600'
      bgColor='transparent'
      border='1px'
      borderColor='gray.200'
      _hover={{ borderColor: 'pink.600' }}
      _active={{ bgColor: 'transparent' }}
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
