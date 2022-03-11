import styled from "styled-components";

import { v } from "./styles/variables";

export const SLayout = styled.div`
    display: flex;
`;

export const BodyLayout = styled.div`
    width: 100%;
    height: 100%;
    flex-direction: column;
    min-height: 100vh;
    display: grid;
`

export const Container =styled.div`
    display: grid;
    min-height: 100vh;
    width: 100%;
    margin: 0 auto;
    grid-template-rows: 0.1fr 1fr 0.1fr;
    grid-template-columns:0.3fr  2.1fr;

    text-align: center;
    grid-gap: 0.25rem;
    transition: all 0.25s ease-in-out;
    align-items: end;
    justify-items: start;
`

export const SMain = styled.main`
    padding-right: calc(2px * 4);
    flex: 1 0 auto
    h1 {
        font-size: 14px;
    }
`;
