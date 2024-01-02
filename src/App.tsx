import { Flex } from '@chakra-ui/react';
import Game from './components/Game';
import Footer from './components/Footer';
import Header from './components/Header';

function App() {
  return (
    <Flex direction='column' justify='space-between' minHeight='100vh'>
      <Header />
      <Game />
      <Footer />
    </Flex>
  );
}

export default App;
