import styled from "styled-components"

export const Background = styled.div`
    height: 100vh;
    width: 100vw;
    z-index: 4;
    background-color: rgba(0, 0, 0, 0.6);
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    button {
        position: fixed;
        top: 120px;
        color: #ffffff;
        border: none;
        background: red;
        width: 50px;
        height: 50px;
        border-radius: 50px;
        cursor: pointer;

        &:hover {
            opacity: 0.8;
        }

        &:active {
            opacity: 0.5;
        }
    }
`

export const Container = styled.div`
    width: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    position: fixed;
    padding: 50px;
    max-width: 1200px;

    iframe {
        border: none;

    }
`