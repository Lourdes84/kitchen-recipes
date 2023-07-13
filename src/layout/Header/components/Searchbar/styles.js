import styled from "styled-components";
import { BsSearch } from 'react-icons/bs'

export const SearchBarWrapper = styled.div`
    width: 300px;
    height: 40px;
    gap: 8px;
    padding: 0 10px;
    border-radius: 15px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border: 1px solid ${props => props.theme.palette.common.black};

    @media (max-width: 1200px) {
        padding: 0;
        width: auto;
    }
`

export const StyledInput = styled.input`
    width: 90%;
    height: 25px;
    padding-left: 10px;
    border: none;

    @media (max-width: 1200px) {
        width: 0px;
        padding-left: 0px;
        transition: .3s ease;

        ${(props) => props.showSearchbar && `
            padding-left: 10px;
            width: 200px;
        `}
    }
`

export const SearchIcon = styled(BsSearch)`
    ${(props) => props.disabled && `
        pointer-events: none;
        color: rgb(170, 170, 170);
    `}
`