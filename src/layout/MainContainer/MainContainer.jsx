import RecipeCard from "@/components/RecipeCard/RecipeCard"
import { SearchContext } from "@/context/SearchContext"
import { recipes } from "@/data/recipes"
import { useContext } from "react"
import { Main } from './styles'

const MainContainer = ({ typeOfRecipe }) => {
    const { searchResults } = useContext(SearchContext)
    const listRecipes = searchResults.length ? searchResults : recipes

    return (
            <Main>
                    {listRecipes.map((recipe, index) => (
                        recipe.category === typeOfRecipe && (
                            <RecipeCard 
                                key={index}
                                data={recipe}
                            />
                        )
                    ))}
            </Main>
    )
}

export default MainContainer