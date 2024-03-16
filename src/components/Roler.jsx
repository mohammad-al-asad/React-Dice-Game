import styled from "styled-components";


function Roler({ diceClicker, dice, resetSore, showRules }) {
  return (
    <Container>
      <div className="img" onClick={diceClicker}>
        <img width="100%" src={`./dice_${dice}.png`} alt="Dice" />
      </div>
      <h2>Click on dice to Role</h2>
    </Container>
  );
}

export default Roler;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  align-items: center;
  .img {
    width: 220px;
    cursor: pointer;
  }
`;
