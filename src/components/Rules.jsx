import styled from "styled-components";

function Rules() {
  return (
    <Container>
      <h2>How to play dice game</h2>
      <div className="text">
        <p>Select any number</p>
        <p>Click on dice image</p>
        <p>
          after click on dice if selected number is equal to dice number you
          will get same point as dice{" "}
        </p>
        <p>if you get wrong guess then 2 point will be dedcuted </p>
      </div>
    </Container>
  );
}

export default Rules;

const Container = styled.div`
  margin: 0 auto;
  margin-top: 30px;
  max-width: 800px;
  background-color: #fbf1f1;
  padding: 20px;
  h2 {
    font-size: 24px;
    margin-bottom: 24px;
  }
`;
