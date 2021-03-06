import styled from "styled-components";
import axios from "axios";

function ButtonHurt(props) {
  return (
    <ButtonWrapper
      onClick={() => {
        sendAction(props.action);
      }}
    >
      <BtnTitle>{props.title}</BtnTitle>
    </ButtonWrapper>
  );
}

function sendAction(action) {
  try {
    axios.post(`https://gc.uthd.dev/api/mc/actions/${action}`);
    console.log(`sent ${action}`);
  } catch (err) {
    console.log(err);
  }
}

const ButtonWrapper = styled.button`
  margin: 20px;
  height: 200px;
  width: 200px;
  background: linear-gradient(
    225deg,
    #ff0000 0%,
    rgba(155, 196, 37, 0.860156) 100%
  );
  border-radius: 8px;
  border: none;
  cursor: pointer;
  :hover {
    box-shadow: 0px 5px 8px 4px rgba(216, 56, 12, 0.45);
    transform: translateY(-5px);
    transition: 100ms;
  }
  transition: 300ms;
`;
const BtnTitle = styled.h5`
  color: white;
  margin: 30px 20px 20px 20px;
`;

export default ButtonHurt;
