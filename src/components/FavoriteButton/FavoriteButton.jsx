'use client'

import { useEffect, useState } from 'react'
import { AiOutlineHeart } from 'react-icons/ai'
import { FavoriteWrapper, AlertMessage, StyledFillHeart } from './styles'

const FavoriteButton = ({ recipe, favorite }) => {
    const [ buttonFavorites, setButtonFavorites ] = useState(false)
    const [ showMessage, setShowMessage ] = useState(false)
    
    const addFavorites = (favoriteRecipe) => {
        setShowMessage(true)
        setButtonFavorites(true)
        let listFavorites = JSON.parse(localStorage.getItem("favorites")) || []
        listFavorites.push(favoriteRecipe)
        
        return localStorage.setItem("favorites", JSON.stringify(listFavorites))  
    } 

    useEffect(() => {
        if(showMessage) {
            const timer = setTimeout(() => {
                setShowMessage(false)
            }, 2000)
            return () => clearTimeout(timer)
        }  
    }, [showMessage])

    return (
        <FavoriteWrapper>
           {showMessage && (
                 <AlertMessage>
                    Añadido!
                </AlertMessage>
            )}
 
            {buttonFavorites || favorite ? (
                <>
                    <StyledFillHeart /> 
                    <span>Añadido a favoritos</span>
                </>
            ) : (
                <>
                    <AiOutlineHeart onClick={() => addFavorites(recipe)} />
                    <span>Añadir a favoritos</span>
                </>
            )}
        </FavoriteWrapper>
    )
}

export default FavoriteButton