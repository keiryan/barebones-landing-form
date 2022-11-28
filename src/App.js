import './App.css';
import { Container, LeftHalf, RightHalf } from "./styles.app";
import Form from "./Form/form";

function App() {
  return (
    <Container >
    <LeftHalf>
      <Form />
    </LeftHalf>
    <RightHalf></RightHalf>
    </Container>
  );
}

export default App;
