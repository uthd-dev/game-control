import styled from "styled-components";
import axios from "axios";

function ButtonHelp(props) {
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
    #8c2ad9 0%,
    rgba(21, 210, 199, 0.85) 100%
  );
  border-radius: 8px;
  border: none;
  cursor: pointer;

  :hover {
    box-shadow: 0px 5px 8px 4px rgba(21, 210, 199, 0.25);
    transform: translateY(-5px);
    transition: 300ms;
  }
  transition: 300ms;
`;
const BtnTitle = styled.h5`
  color: white;
  margin: 30px 20px 20px 20px;
`;

export default ButtonHelp;
