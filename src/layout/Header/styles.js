import styled from 'styled-components'
import Link from 'next/link'

export const HeaderWrapper = styled.header`
    width: 100%;
    height: 120px;
    background-color: #000;
    color: #fff;
    display: flex;
    justify-content: center;
`
export const ImageWrapper = styled.div`
    width: 150px;

     @media (max-width: 768px) {
        width: 100px;
        position: relative;
    }
`
export const Icon = styled.div`
    font-size: 30px;
    cursor: pointer;
`

export const NavWrapper = styled.div`
    width: 70%;
    display: flex;
    justify-content: space-between;
    align-items: center;

    @media (max-width: 768px) {
        width: 80%;
        flex-direction: row-reverse;
    }
`

export const LinksWrapper = styled.ul`
    display: flex;
    align-items: center;
    gap: 30px;
    padding: 0 20px;
    text-transform: uppercase;
    letter-spacing: 2px;
 
   @media (max-width: 768px) {
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
    color: #fff;
    text-decoration: none;

    &::after {
        content: '';
        position: absolute;
        width: 100%;
        transform: scaleX(0);
        height: 2px;
        bottom: -4px;
        left: 0;
        background-color: #fff;
        transform-origin: bottom right;
        transition: transform 0.25s ease-out;
    }
    &:hover::after {
        transform: scaleX(1);
        transform-origin: bottom left;
    }
    @media (max-width: 768px) {
        color: #000;
    }

`

export const StyledDropdown = styled.ul`
    display: flex;
    flex-direction: column;
    width: 230px;
    background-color: #fff;
    color: #000;
    border: 1px solid #000;
    position: absolute;
    z-index: 100;

    @media (max-width: 768px) {
        display: none;
        position: relative;

        &.show-dropdown {
            display: flex;
            margin-top: 20px;
        }
    }
     @media (min-width: 768px) {
        opacity: 0;
        visibility: hidden;
        transform: translateY(80px);
        transition: .4s;

        &.show-dropdown {
            opacity: 1; 
            visibility: visible;
            transform: translateY(50px);
        }
    }
`
export const StyledNav = styled.nav`
    @media (max-width: 768px) {
        width: 280px;
        height: 89vh;
        background-color: #fff;
        color: #000;
        border: 1px solid #000; 
        position: absolute;
        left: 0;
        top: 119px;
        transform: translateX(-100%);
        transition: transform .3s ease-out;
        z-index: 100;

        &.show-responsive {
            transform: translateX(0%);
        }
    }
`

export const StyledLinkDropdown = styled.li`
    display: flex;
    gap: 10px;
    padding: 20px 30px;
    border: 1px solid #cfcdcd;
    margin-bottom: 1px;
   
    &:hover {
        background: #FEF7EA;
    }
`

export const SearchBarWrapper = styled.div`
    width: 300px;

    @media (max-width: 1330px) {
        width: 200px;
    }
`