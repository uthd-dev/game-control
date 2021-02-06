import styled from "styled-components";

function Card(props) {
  function clickHandler() {
    if(props.customClickEvent) props.customClickEvent();
    else return;
  }
  return (
    <Wrapper onClick={clickHandler}>
      <CardTitle>{props.title}</CardTitle>
      <DataWrapper>
        <CardData>{props.value}</CardData>
      </DataWrapper>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 250px;
  height: 150px;
  margin: 15px;

  background: linear-gradient(64.96deg, #111111 0%, rgba(79, 79, 79, 0.2) 100%);
  border: 2px solid #ff5953;
  box-sizing: border-box;
  border-radius: 8px;

  cursor: pointer;
`;

const CardTitle = styled.h5`
  width: 90%;
  text-align: left;
  font-size: 18px;
  font-weight: 400;
  margin: 5%;
`;
const CardData = styled.h3`
  font-weight: 400;
  font-size: 48px;
  color: rgba(203, 255, 54, 0.860156);
  margin: 0;
`;
const DataWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export default Card;
