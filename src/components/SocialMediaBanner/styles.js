import styled from 'styled-components'

export const BannerWrapper = styled.section`
    text-align: center;
    font-size: 25px;
    display: flex;
    flex-direction: column;
    gap: 20px;
    justify-content: center;
    align-items: center;
    margin: 40px 0;
    color: #fff;
    width: 100%;
    height: 300px;
    background-attachment: fixed;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    background-image: url("/images/parallax.webp");

    @media(max-width: 940px){
        height: 400px;
        font-size: 20px;
    }
`

export const SocialMediaWrapper = styled.div`
    display: flex;
    gap: 30px;

    @media(max-width: 940px){
        flex-direction: column;
    }
`

export const StyledSpan = styled.span`
    display: flex;
    align-items: center;
    gap: 10px;
`