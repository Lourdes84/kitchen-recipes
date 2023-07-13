import styled from 'styled-components'

export const IngredientsWrapper = styled.div`
    display: flex;
    align-items: center;
    gap: 60px;
    background-color: ${props => props.theme.palette.primary.light};
    border: 1px solid ${props => props.theme.palette.primary.main};
    padding: 20px;
    box-shadow: rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px;

    @media (max-width: 1560px) {
        flex-direction: column;
    }
`
export const ImageWrapper = styled.div`
    height: 400px;
    overflow: hidden;

     img {
        object-fit: cover;
        height: 100%;
     }

    @media (max-width: 1560px) {
        height: auto;
    }
`
export const BadgesWrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
`

export const InfoWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 30px;
    padding: 20px;
    background-color: ${props => props.theme.palette.common.white};
    line-height: 1.5;

     @media (max-width: 1560px) {
        width: 100%;
    }
`

export const List = styled.li`
    padding: 20px 0;
    border-bottom: 1px solid #ccc;
    line-height: 1.8;
`

export const NumberStep = styled.span`
    border: 1px solid ${props => props.theme.palette.primary.main};
    background-color: ${props => props.theme.palette.primary.light};
    padding: 5px 10px;
    border-radius: 50%;
    margin-right: 10px;
`
