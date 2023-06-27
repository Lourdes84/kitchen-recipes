import styled from 'styled-components'

export const EmptyWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: relative;
    width: 500px;
`

export const ImageWrapper = styled.div`
    border-radius: 50%;
    position: relative;
    display: inline-block;

    &:after {
        content: "";
        display: block;
        width: 100%;
        height: 100%;
        background: radial-gradient(ellipse at center, rgba(255,255,255,0) 0%,rgba(255,255,255,1) 69%,rgba(255,255,255,1) 100%);
        border-radius: 50%;
        position: absolute;
        top: 0;
        left: 0;
    }
   
    img {
        border-radius: 50%;
        display: block;
        border:1px solid rgba(255,255,255,0);
    }
`

export const StyledText = styled.h2`
    position: absolute;
    bottom: ${(props => props.bottomText ? '-60px': '50px')};
    display: inline-block;
    color: #FDC257;
    text-align: center;
    font-size: 35px;
    font-family: 'Righteous', serif;
    text-shadow: .03em .03em 0 hsla(230,40%,50%,1);

    &:after {
        content: '';
        position: absolute;
        top: .06em; 
        left: .06em;
        z-index: -1;
        text-shadow: none;
        background-image:
        linear-gradient(
            45deg,
            transparent 45%,
            hsla(48,20%,90%,1) 45%,
            hsla(48,20%,90%,1) 55%,
            transparent 0
            );
        background-size: .05em .05em;
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
    }
`