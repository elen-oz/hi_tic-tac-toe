import { Container, Grid, GridItem } from '@chakra-ui/react';
import Game from './components/Game';
import Footer from './components/Footer';
import Header from './components/Header';

function App() {
  return (
    <Container>
      <Grid
        templateAreas={`"header"
                  "main"
                  "footer"`}
        gridTemplateRows={'120px 1fr 30px'}
        minHeight='100vh'
      >
        <GridItem area={'header'}>
          <Header />
        </GridItem>

        <GridItem area={'main'}>
          <Game />
        </GridItem>

        <GridItem area={'footer'}>
          <Footer />
        </GridItem>
      </Grid>
    </Container>
  );
}

export default App;
