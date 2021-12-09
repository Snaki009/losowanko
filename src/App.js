import './App.css';
import Ladder from './files/Ladder';
import { styled } from '@mui/system';

const Container = styled('div')({
})

function App() {
  return (
    <Container>
      <Ladder />
    </Container>
  );
}

export default App;
