import styled from 'styled-components'

export const TitleWrapper = styled.div`
    background-color: transparent;
    border: 2px solid #FDC257;
    font-weight: 700;
    line-height: 24px;
    padding: 23px 40px;
    margin: ${(props) => props.withoutMargin ? "0px 0px 40px 0px" : "40px 0px"};
    position: relative;

    &:before {
        background-color: #FEF7EA;
        content: "";
        height: calc(100% + 3px);
        position: absolute;
        right: -15px;
        top: -12px;
        width: 100%;
        z-index: -1;
    }
`

export const StyledTitle = styled.h1`
    font-family: Arial Black; 
    font-weight: bold; 
    font-size: 30px; 
    background: #202020; 
    -webkit-background-clip: text; 
    -moz-background-clip: text; 
    background-clip: text; 
    color: transparent; 
    padding: 5px 0;
    text-shadow: 0px 3px 3px rgba(255,255,255,0.4),0px -1px 1px rgba(0,0,0,0.3); 

    @media(max-width: 438px){
        font-size: 25px;
    }
`