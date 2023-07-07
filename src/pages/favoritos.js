'use client'

import FavoriteCard from "@/components/FavoriteCard/FavoriteCard"
import CustomizedTitle from "@/components/CustomizedTitle/CustomizedTitle"
import { useContext, useEffect, useState } from "react"
import EmptySection from "@/components/EmptySection/EmptySection"
import Head from "next/head"
import { SearchContext } from "@/context/SearchContext"

const Favoritos = () => {
    const { searchResults } = useContext(SearchContext)
    const [ listFavorites, setListFavorites ] = useState([])
   
    const deleteRecipeFavorites = (id) => {
      const favorites = JSON.parse(localStorage.getItem("favorites")) || []
      const updatedFavorites = favorites.filter(favorite => favorite.id !== id)
      localStorage.setItem("favorites", JSON.stringify(updatedFavorites))
      setListFavorites(updatedFavorites)
    }
    
    useEffect(() => {
      let favorites = JSON.parse(localStorage.getItem("favorites")) || [] 
      setListFavorites(favorites)
    }, [])

    const getList = () => {
      if(searchResults !== "empty") {
        const result = listFavorites.filter(favorites => (
            searchResults.some(search => favorites.id === search.id)
        ))
        return result.length > 0 ? result : listFavorites
      }
      return []
    }

    const list = getList()

    return (
      <>
          <Head>
            <title>Tus recetas favoritas - Barriga llena corazón contento</title>
            <meta name="description" content="Guarda todas tuys recetas favoritas para poder tenerlas siempre a mano" />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <link rel="icon" href="/tenedor.svg" />
          </Head>

          <CustomizedTitle text="Favoritos" />
          <main>
              {list.length ? list.map((recipe, index) => (
                <FavoriteCard
                    key={index}
                    recipe={recipe}
                    deleteRecipe={deleteRecipeFavorites}
                  />
              ))
              : (
                <EmptySection emptyContent text="Ups! No tienes favoritos agregados" />
              )}
          </main>
          <style jsx>
              {`
                  main {
                    display: flex;
                    justify-content: center;
                    flex-wrap: wrap;
                    gap: 20px;
                  }
              `}
          </style>
      </>
    )
}

export default Favoritos