import Link from 'next/link'
import styled from 'styled-components'

export const Icon = styled.div`
    font-size: 30px;
    cursor: pointer;
`

export const StyledNav = styled.nav`
    @media (max-width: 1200px) {
        width: 280px;
        height: 89vh;
        background-color: ${props => props.theme.palette.common.white};
        color: ${props => props.theme.palette.common.black};
        border: 1px solid  ${props => props.theme.palette.common.black}; 
        position: absolute;
        left: 0;
        top: 119px;
        transform: translateX(-100%);
        transition: transform .3s ease-out;
        z-index: 100;

        ${(props) => props.showResponsive && `
            transform: translateX(0%);
        `}
    }
`
export const LinksWrapper = styled.ul`
    display: flex;
    align-items: center;
    gap: 30px;
    padding: 0 20px;
    text-transform: uppercase;
    letter-spacing: 2px;
 
   @media (max-width: 1200px) {
        flex-direction: column;
        align-items: flex-start;
        padding: 20px;
    }
`
export const StyledLink = styled(Link)`
    position: relative;
    display: flex;
    align-items: center;
    gap: 5px;
    color: ${props => props.theme.palette.common.white};
    text-decoration: none;

    &::after {
        content: '';
        position: absolute;
        width: 100%;
        transform: scaleX(0);
        height: 2px;
        bottom: -4px;
        left: 0;
        background-color: ${props => props.theme.palette.common.white};
        transform-origin: bottom right;
        transition: transform 0.25s ease-out;
    }
    &:hover::after {
        transform: scaleX(1);
        transform-origin: bottom left;
    }
    @media (max-width: 1200px) {
        color: ${props => props.theme.palette.common.black};
    }
`
export const StyledDropdown = styled.ul`
    display: flex;
    flex-direction: column;
    width: 240px;
    background-color: ${props => props.theme.palette.common.white};
    color: ${props => props.theme.palette.common.black};
    border: 1px solid ${props => props.theme.palette.common.black};
    position: absolute;
    z-index: 100;

    @media (max-width: 1200px) {
        display: none;
        position: relative;

        ${(props) => props.showDropdown && `
            display: flex;
            margin-top: 20px;
        `}
    }
    
     @media (min-width: 1200px) {
        opacity: 0;
        visibility: hidden;
        transform: translateY(80px);
        transition: .4s;

        ${(props) => props.showDropdown && `
            opacity: 1; 
            visibility: visible;
            transform: translateY(50px);
        `}
    }
`
export const StyledLinkDropdown = styled.li`
    display: flex;
    gap: 10px;
    padding: 20px 30px;
    border: 1px solid #cfcdcd;
    margin-bottom: 1px;
   
    &:hover {
        background: ${props => props.theme.palette.primary.light};
    }
`
