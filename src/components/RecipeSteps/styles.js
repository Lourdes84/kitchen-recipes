import styled from 'styled-components'

export const IngredientsWrapper = styled.div`
    display: flex;
    align-items: center;
    gap: 60px;
    background-color: #FEF7EA;
    border: 1px solid #FDC257;
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
        height: 100%;
     }
`
export const BadgesWrapper = styled.div`
    display: flex;
    gap: 10px;

    @media (max-width: 616px) {
        flex-direction: column;
    }
`

export const InfoWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 30px;
    height: 400px;
    padding: 0px 20px;
    background-color: #fff;

     @media (max-width: 1560px) {
        width: 100%;
    }
     @media (max-width: 616px) {
        height: 500px;
    }
`

export const List = styled.li`
    padding: 20px 0;
    border-bottom: 1px solid #ccc;
    line-height: 1.8;
`

export const NumberStep = styled.span`
    border: 1px solid #FDC257;
    background-color: #FEF7EA;
    padding: 5px 10px;
    border-radius: 50%;
    margin-right: 10px;
`
