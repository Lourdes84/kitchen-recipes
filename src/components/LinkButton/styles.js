import styled from 'styled-components'
import Link from 'next/link'

export const StyledLink = styled(Link)`
    background-color: transparent;
    border: 1px solid ${props => props.theme.palette.primary.main};
    font-weight: 700;
    line-height: 24px;
    padding: 10px 23px;
    position: relative;

    &:hover {
        background-color: transparent;
        cursor: pointer;
    }

    &:before {
        background-color: ${props => props.theme.palette.primary.light};
        content: "";
        height: calc(100% + 3px);
        position: absolute;
        right: -7px;
        top: -9px;
        transition: .3s ease-in;
        width: 100%;
        z-index: -1;
    }

    &:hover&:before {
        background-color: ${props => props.theme.palette.primary.main};
        right: 0;
        top: 0;
    }
`