import React from "react"
import { styled, keyframes } from "frontity"

const Loading = () => <Spinner />

export default Loading

const spin = keyframes`
    0% { transform: rotate(0deg);}
    100% { transform: rotate(360deg); }
`

const Spinner = styled.div`
    border: 15px solid var(--gray);
    box-shadow: 0 0 50px var(--dark-red);
    border-top: 15px solid var(--light-red);
    border-radius: 50%;
    width: 160px;
    height: 160px;
    animation: ${spin} 2s linear infinite;
    margin: 38vh auto;
    background: var(--darkest-blue);
`