import styled from "styled-components";
import { Button } from "./Buttton";

function HomePage({ clickHandler }) {
  return (
    <div>
      <Container>
        <div>
          <img width="100%" src="./dices.png" alt="Dices" />
        </div>
        <div>
          <h1>DICE GAME</h1>
          <Button onClick={clickHandler}>Play Now</Button>
        </div>
      </Container>
    </div>
  );
}

export default HomePage;

const Container = styled.div`
  max-width: 1000px;
  margin: 40px auto;
  display: flex;
  align-items: center;
  div {
  }
  h1 {
    font-size: 80px;
    white-space: nowrap;
  }
`;
