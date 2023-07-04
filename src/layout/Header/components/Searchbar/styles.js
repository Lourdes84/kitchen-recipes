import styled from "styled-components";

export const SearchBarWrapper = styled.div`
    width: 300px;
    height: 40px;
    gap: 8px;
    padding: 0 10px;
    border-radius: 15px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border: 1px solid #000;

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
        display: none;
        width: 0%;
        padding-left: 0px;
        transition: .3s ease;

        &.show {
            display: block;
            width: 200px;
        }
    }
`