import { useEffect } from "react";
import { motion } from 'framer-motion';
import styled from "styled-components";

import { Action, CartItem } from "./index";
import { SelectorVariants } from "./animations";

interface Props {
  action: Action;
  index: number;
  setCart: Function;
}

export default function OptionSelector({ action, index, setCart }: Props) {
  return (
    <Option
      variants={SelectorVariants}
    >
      <h5>{action.name}</h5>
      <Dropdowns action={action} index={index} setCart={setCart} />
    </Option>
  );
}

function Dropdowns(props) {
  const action: Action = props.action;

  if (action.opts.levels || action.opts.durations)
    return (
      <DropdownWrapper>
        <LevelsDropdown action={action} />
        <DurationsDropdown action={action} />
      </DropdownWrapper>
    );
  return <></>;
}

function LevelsDropdown(props) {
  const action: Action = props.action;

  if (action.opts.levels)
    return (
      <Levels name="level" id={`${action.id}-level`}>
        <option disabled selected value={0}>
          Level
        </option>
        {action.opts.levels.map((level) => {
          return <option value={level}>{level}</option>;
        })}
      </Levels>
    );

  return <></>;
}

function DurationsDropdown(props) {
  const action: Action = props.action;

  if (action.opts.durations)
    return (
      <>
        <Durations name="duration" id={`${action.id}-duration`}>
          <option disabled selected value={0}>
            Duration
          </option>
          {action.opts.durations.map((duration) => {
            return <option value={duration}>{duration} seconds</option>;
          })}
        </Durations>
      </>
    );

  return <></>;
}

/* STYLES */
const Option = styled(motion.div)`
  h5 {
    font-family: "Montserrat", sans-serif;
    color: #e5e5e5;
    margin-left: 1rem;
  }
`;

const DropdownWrapper = styled.div`
  margin: 1rem;

  display: flex;
  justify-content: space-between;
  gap: 0.5rem;
`;

//Dropdowns

const Levels = styled.select`
  flex: 1;
  padding: 0.5rem;
  border-radius: 5px;
`;

const Durations = styled.select`
  flex: 2;
  padding: 0.5rem;
  border-radius: 5px;
`;
