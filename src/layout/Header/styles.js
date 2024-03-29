import styled from 'styled-components'

export const HeaderWrapper = styled.header`
    width: 100%;
    height: 120px;
    background-color: ${props => props.theme.palette.common.black};
    color: ${props => props.theme.palette.common.white};
    display: flex;
    justify-content: center;
`
export const NavWrapper = styled.div`
    width: 70%;
    display: flex;
    justify-content: space-between;
    align-items: center;

    @media (max-width: 1200px) {
        width: 80%;
    }
`