import styled from 'styled-components'
import Link from 'next/link';

export const SliderWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    @media (min-width: 1071px) {
        position: relative;
    }
`
export const ImageSlide = styled.img`
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
    opacity: .54;
`

export const FoodOptionsWrapper = styled.div`
    width: 50%;
    display: flex;
    justify-content: center;
    gap: 10px;
    z-index: 10;

    @media (min-width: 1071px) {
        position: absolute;
        bottom: -75px;
    }

    @media (max-width: 1070px) {
        flex-wrap: wrap;
        width: 70%;
        padding-top: 20px;
        padding-bottom: 40px;
    }

    @media (max-width: 729px) {
        width: 90%;
    }
`
export const StyledLink = styled(Link)`
    position: relative;
    width: 250px;
    height: 150px;

    @media (max-width: 640px) {
        width: 100%;
        height: 100px;
    }
`
export const FoodOptions = styled.div`
    width: 250px;
    height: 150px;
    background-color: #000;
    color: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
    border: 2px solid #fff;
    cursor: pointer;

    @media (max-width: 640px) {
        width: 100%;
        height: 100px;
    }
`
export const ImageOption = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
    opacity: .54;
    transition: opacity .4s ease-out;

    &:hover {
        opacity: 1;
    }
`
export const TitleOption = styled.div`
    position: absolute;
    font-size: 20px;
    border: 1px solid #fff;
    padding: 5px 15px;
    border-radius: 15px;
    font-weight: 400;
    z-index: 1;
     
    @media (max-width: 640px) {
        font-size: 16px;
    }
`