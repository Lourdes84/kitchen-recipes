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
`

export const ImageWrapper = styled.div`
    width: 450px;
    height: 300px;
    overflow: hidden;
    position: relative;
    transition: transform .3s;
    
    &:hover {
        transform: scale(1.1);
    }
` 

export const WidgetWrapper = styled.div`
    display: flex;
    gap: 20px;
`

export const InfoWrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 20px;
`
