import styled from "styled-components"


export const Container = styled.div`
    display: flex;
    z-index: 3;
    position: fixed;
    top: 0;
    padding: 30px 100px;
    justify-content: space-between;
    align-items: center;
    background-color: ${props => props.$changeBackground ? '#000000' : 'transparent'};
    min-height: 100px;
    transition: background-color 0.6s ease-in-out;

    img {
        width: 25%;
    }
`

export const Menu = styled.ul`
    display: flex;
    list-style: none;
    gap: 50px;
`

export const Li = styled.li`
    font-weight: 600;
    cursor: pointer;
    font-size: 20px;
    position: relative;

    a {
        color: #ffffff;
        text-decoration: none;
    }

    &::after {
        content: '';
        height: 2px;
        width: ${props => props.$isActive ? '100%' : 0};
        background-color: #189b20;
        position: absolute;
        bottom: -10px;
        transition: width 0.5s ease-in-out;

        left: 50%;
        transform: translateX(-50%);
    }

    &:hover::after {
        width: 100%;
    }
`