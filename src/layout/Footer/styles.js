import styled from 'styled-components'

export const FooterWrapper = styled.footer`
    position: absolute;
    bottom: 0;
    width: 100%;
    display: flex;
    justify-content: center;
    padding: 10px 0;
    color: ${props => props.theme.palette.common.white};
    background-color: ${props => props.theme.palette.common.black};
`

export const FooterInfo = styled.div`
    width: 70%;
    text-align: center;
`