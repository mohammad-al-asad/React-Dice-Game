import styled from "styled-components";
const numArray = [1, 2, 3, 4, 5, 6];
function Selector({ boxSelector, selectedNumber }) {
  return (
    <Container>
      <div className="numContainer">
        {numArray.map((value, i) => (
          <Box
            isSelected={value === selectedNumber}
            onClick={() => boxSelector(value)}
            key={i}
          >
            {value}
          </Box>
        ))}
      </div>
      <p>Select Number</p>
    </Container>
  );
}

export default Selector;

const Box = styled.div`
  height: 60px;
  width: 60px;
  font-size: 24px;
  font-weight: 700;
  color: ${({ isSelected }) => (isSelected ? "white" : "black")};
  background-color: ${({ isSelected }) => (!isSelected ? "white" : "black")};
  border: 2px solid black;
  display: grid;
  place-items: center;
  cursor: pointer;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: end;
  .numContainer {
    display: flex;
    gap: 24px;
  }
  p {
    font-size: 24px;
    font-weight: 700;
  }
`;
