'use client'

import Badge from './../Badge/Badge'
import { RecipeCardWrapper, ImageWrapper, InfoWrapper, WidgetWrapper } from './styles'
import FavoriteButton from '../FavoriteButton/FavoriteButton'
import LinkButton from '../LinkButton/LinkButton'
import { useEffect, useState } from 'react'
import BadgeIcon from '../BadgeIcon/BadgeIcon'

const RecipeCard = ({ data }) => {
    const [ filtered, setFiltered ] = useState(false)

    useEffect(() => {
        const favorites = JSON.parse(localStorage.getItem("favorites"))
        const isFavorites = favorites.some(favorite => favorite.id === data.id)
        setFiltered(isFavorites)
    }, [data.id])

    
    return (
        <RecipeCardWrapper>
            <ImageWrapper>
                <img src={data.img} alt="recipe" />
            </ImageWrapper>
            <InfoWrapper>
                <h2>{data.title}</h2>
                <WidgetWrapper>
                    <Badge text={data.category} />
                    <FavoriteButton
                        recipe={data}
                        favorite={filtered}
                    />
                    <BadgeIcon timeCooking text={data.time} />
                </WidgetWrapper>
                <p>{data.description}</p>
                <div>
                    <LinkButton 
                        href={`/receta/${encodeURIComponent(data.title)}`}
                        text="Leer más"
                    />
                </div>
            </InfoWrapper>
        </RecipeCardWrapper>
    )
}

export default RecipeCard