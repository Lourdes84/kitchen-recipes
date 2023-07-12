import RecipeSteps from "@/components/RecipeSteps/RecipeSteps"
import CustomizedTitle from "@/components/CustomizedTitle/CustomizedTitle"
import { useRouter } from "next/router"
import { recipes } from './../../data/recipes'
import LinkButton from "@/components/LinkButton/LinkButton"
import Head from "next/head"

const Receta = () => {
    const router = useRouter()
    const { title } = router.query
    const recipe = recipes.find((recipe) => recipe.title === title)

    const getPageRecipe = (category) => {
        const pages = {
            "Popular": "/",
            "Healthy": "/healthy",
            "Vegetariana": "/vegetarianas",
            "Postre": "/postres"
        }
        return pages[category] || "/"
    }

    const url = getPageRecipe(recipe?.category)

    return (
        <>
            <Head>
                <title>{`${title} - Barriga llena corazón contento`}</title>
                <meta name="description" content={`Receta de ${title} fácil y explicada paso a paso con todos los ingredientes necesarios`} />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/tenedor.svg" />
            </Head>

            <CustomizedTitle text={title} />
            <main className="recipe-wrapper">
                <RecipeSteps recipe={recipe} />
                <LinkButton href={url} text="Volver" />
            </main>
        </>
    )
}

export default Receta