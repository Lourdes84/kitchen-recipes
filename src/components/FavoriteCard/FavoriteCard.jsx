import LinkButton from '../LinkButton/LinkButton'
import { CardWrapper, ImageWrapper, StyledImg, DeleteIcon, HeaderWrapper, InfoWrapper } from './styles'

const FavoriteCard = ({ recipe, deleteRecipe }) => {

    return (
        <CardWrapper>
            <ImageWrapper>
                <StyledImg src={recipe.img} alt="recipe" />
                <DeleteIcon onClick={() => deleteRecipe(recipe.id)} />
            </ImageWrapper>
            <InfoWrapper>
                <HeaderWrapper>
                    <h2>{recipe.title}</h2>
                </HeaderWrapper>
                <div>
                    <LinkButton 
                        href={`/receta/${encodeURIComponent(recipe.title)}`}
                        text="Ver receta"
                    />
                </div>
                <div>
                    {recipe.description}
                </div>
            </InfoWrapper>
        </CardWrapper>
    )
}

export default FavoriteCard