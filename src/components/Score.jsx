import styled from "styled-components";

function Score({ score }) {
  return (
    <Container>
      <h1>{score}</h1>
      <p>Total Score</p>
    </Container>
  );
}

export default Score;

const Container = styled.div`
  width: 130px;
  height: 140px;
  text-align: center;
  h1 {
    font-size: 80px;
    line-height: 80px;
  }
  p {
    font-size: 20px;
  }
`;
