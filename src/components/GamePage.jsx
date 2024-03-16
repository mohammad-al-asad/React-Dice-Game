import { useState } from "react";
import Roler from "./Roler";
import Score from "./Score";
import Selector from "./Selector";
import styled from "styled-components";
import Rules from "./Rules";
import { Button, TransparentBtn } from "./Buttton";

function GamePage() {
  const [dice, setDice] = useState(1);
  const [selectedNumber, setSelectedNumber] = useState();
  const [score, setScore] = useState(0);
  const [error, setError] = useState("");
  const [isRule, setIsRule] = useState(false);

  const getRandom = () => Math.floor(Math.random() * 6 + 1);

  const diceClicker = () => {
    if (!selectedNumber) {
      setError("You have not selected any number");
      return;
    }

    const randomNumber = getRandom();
    setDice(randomNumber);

    if (randomNumber === selectedNumber) {
      setScore((prev) => prev + randomNumber);
    } else {
      setScore((prev) => prev - 2);
    }

    setSelectedNumber(undefined);
  };

  const boxSelector = (value) => {
    setSelectedNumber(value);
    setError("");
  };

  const resetSore = () => setScore(0);

  const showRules = () => {
    setIsRule((prev) => !prev);
  };

  return (
    <Container>
      <div className="error">
        <p>{error}</p>
      </div>
      <Content>
        <Top>
          <Score score={score} />
          <Selector boxSelector={boxSelector} selectedNumber={selectedNumber} />
        </Top>
        <Roler diceClicker={diceClicker} dice={dice} />
        <TransparentBtn onClick={resetSore}>Reset Score</TransparentBtn>
        <Button onClick={showRules}>{isRule ? "HIde" : "Show"} Rules</Button>
        {isRule && <Rules />}
      </Content>
    </Container>
  );
}

export default GamePage;


const Container = styled.div`
    width: 1000px;
    margin: 0 auto;
    .error {
    width: 100%;
    height: 50px;
    display: flex;
    justify-content: end;
    align-items: end;
    color: red;
  }
`

const Top = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  align-items: center;
  width: 100%;
  padding-bottom: 20px;

`;
