import { useState } from "react";
import { motion, useAnimation } from 'framer-motion'
import styled from "styled-components";

import ActionModal, { Props } from '../components/action-modal';

const ButtonVariants = {
    hidden: {
        opacity: 0,
    },
    shown: {
        opacity: 1,
    }
}

const defaultProps: Props = {
    title: "test",
    actions: [
        {
            name: "Strength",
            id: "strength",
            opts: {
                durations: [5, 10, 15, 20],
                levels: [1, 2],
                basePrice: 50
            },
        },
        {
            name: "Speed",
            id: "speed",
            opts: {
                durations: [5, 10, 15, 20, 30],
                levels: [1, 2],
                basePrice: 20
            },
        },
        {
            name: "Regeneration",
            id: "regen",
            opts: {
                durations: [5, 10, 15, 30, 45],
                levels: [1, 2, 3, 4],
                basePrice: 30
            }, 
        }
    ],
    userBal: 550,
    type: "good",
    variant: "potion",
}

export default function DevPage() {
    const [visible, setVisibility] = useState(false);
    const [buttonVisible, setButtonVisibility] = useState(true);
    const controls = useAnimation();

    async function toggleVisibility() {
        await controls.start(ButtonVariants.hidden);
        setButtonVisibility(false);
        setVisibility(!visible);
        setTimeout(async() => {
            await controls.start(ButtonVariants.shown);
            setButtonVisibility(true);
        }, 1000)
    }

    return(
        <Page>
            <Button 
                initial={"hidden"}
                animate={buttonVisible ? "shown" : controls}
                variants={ButtonVariants}
                onClick={toggleVisibility}
            >
                Toggle Element
            </Button>
            <ActionModal defaultProps={defaultProps} visible={visible}/>
        </Page>
    );
}

const Page = styled.div`
    height: 100vh;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: gray;
`;

const Button = styled(motion.div)`
    padding: 0.5rem;
    background-color: #222;
    color: white;
    border-radius: 5px;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    margin: 1rem;
`;