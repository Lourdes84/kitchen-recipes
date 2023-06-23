import styled from 'styled-components'
import { AiFillHeart } from 'react-icons/ai'

export const FavoriteWrapper = styled.div`
    display: flex;
    align-items: center;
    gap: 10px;
    position: relative;

    svg {
        font-size: 20px;
        cursor: pointer;
    }
`

export const AlertMessage = styled.div`
    position: absolute;
    top: -30px;
    background-color: #FEF7EA;
    border: 1px solid #FDC257;
    padding: 5px;
`

export const StyledFillHeart = styled(AiFillHeart)`
    color: red;
    cursor: default;
`