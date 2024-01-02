import { Button } from '@chakra-ui/react';

interface Props {
  value: string;
  onSquareClick: (i: number) => void;
}

const Square = ({ value, onSquareClick }: Props) => {
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

export default Square;
