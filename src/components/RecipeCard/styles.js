import styled from 'styled-components'

export const RecipeCardWrapper = styled.div`
    max-width: 450px;
    height: 500px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: 30px;
    padding-bottom: 30px;
    border-bottom: 2px solid #000;
    overflow: hidden;

    @media( max-width: 1357px) {
        height: auto;
    }
`

export const ImageWrapper = styled.div`
    width: 450px;
    height: 300px;
    overflow: hidden;
    position: relative;
    transition: transform .3s;

    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
    
    &:hover {
        transform: scale(1.1);
    }
` 

export const WidgetWrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
`

export const InfoWrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 20px;
`
