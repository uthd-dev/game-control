import styled from "styled-components";

import ActionModal, { Props } from '../components/action-modal';
import OptionSelector from "../components/action-modal/option-selector";

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
            id: "speed",
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
    return(
        <Page>
            <ActionModal defaultProps={defaultProps} />
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