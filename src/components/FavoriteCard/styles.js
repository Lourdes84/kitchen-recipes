import styled from 'styled-components'
import { BsFillHeartbreakFill } from 'react-icons/bs'

export const CardWrapper = styled.article`
    width: 350px;
    height: 530px;
    display: flex;
    flex-direction: column;
    border: 1px solid #ccc;
    border-radius: 15px;
    overflow: hidden;
    box-shadow: 0 1px 3px 0 rgba(0,0,0,.1), 0 1px 2px 0 rgba(0,0,0,.06);

    &:hover {
        box-shadow: none;
    }

    @media (max-width: 414px) {
        height: 580px;
    }
`

export const ImageWrapper = styled.div`
    position: relative;
    flex-basis: 50%;
    flex-grow: 0;
    overflow: hidden;
`
export const StyledImg = styled.img`
    width: 100%;
    height:100%;
    object-fit: cover;
    transition: .3s;

    &:hover {
        transform: scale(1.1);
    }
`
export const DeleteIcon = styled(BsFillHeartbreakFill)`
    position: absolute;
    font-size: 30px;
    color: red;
    top: 10px;
    right: 10px;
    z-index: 1;
    cursor: pointer;
`
export const HeaderWrapper = styled.header`
    display: flex;
    flex-direction: column;
    gap: 8px;
    background-color: ${props => props.theme.palette.primary.light};
    padding: 10px 0;
    margin-bottom: 10px;
`

export const InfoWrapper = styled.div`
    flex: 50%;
    padding: 20px;
    display: flex;
    gap: 10px;
    flex-direction: column;
    justify-content: space-around;
    text-align: center;
`




