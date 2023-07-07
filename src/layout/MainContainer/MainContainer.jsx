import CustomizedTitle from "@/components/CustomizedTitle/CustomizedTitle"
import RecipeCard from "@/components/RecipeCard/RecipeCard"
import { SearchContext } from "@/context/SearchContext"
import { recipes } from "@/data/recipes"
import { useRouter } from "next/router"
import { useContext } from "react"
import { Main, TitleWrapper } from './styles'

const MainContainer = ({ typeOfRecipe }) => {
    const router = useRouter()
    const isHomePage = router.pathname === "/"
    const { searchResults } = useContext(SearchContext)
    const listRecipes = searchResults.length ? searchResults : recipes

    let filteredRecipes = []
    
    if (listRecipes !== "empty") {
        filteredRecipes = listRecipes.filter(
        (recipe) => recipe.category === typeOfRecipe
    )}
    
    return (
            <Main>
                {isHomePage && (
                    <TitleWrapper>
                        <CustomizedTitle withoutMargin text="Recetas populares" />
                    </TitleWrapper>
                )}
                {filteredRecipes.length ? (
                    filteredRecipes.map((recipe, index) => (
                        <RecipeCard key={index} data={recipe} />
                    ))
                ) : <p>No se han encontrado recetas con ese nombre en recetas {typeOfRecipe}</p>}
            </Main>
          )
        }
        
export default MainContainer