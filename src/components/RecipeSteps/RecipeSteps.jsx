import Badge from "../Badge/Badge"
import BadgeIcon from "../BadgeIcon/BadgeIcon"
import { IngredientsWrapper, InfoWrapper, ImageWrapper, BadgesWrapper, List, NumberStep } from './styles'

const RecipeSteps = ({ recipe }) => {
    return (
        <>
            <IngredientsWrapper>
                <ImageWrapper>
                    <img src={recipe?.img} alt={recipe?.title} />
                </ImageWrapper>
                <InfoWrapper>
                    <BadgesWrapper>
                        <Badge text={recipe?.category} />
                        <Badge text={recipe?.difficulty} />
                        <BadgeIcon timeCooking text={recipe?.time} />
                        <BadgeIcon diners text={recipe?.diners} />
                    </BadgesWrapper>

                    <h2>Ingredientes:</h2>
                    <div>
                        {recipe?.ingredients.map((ingredient, index) => (
                            <ul key={index}>
                                <li>- {ingredient}</li>
                            </ul>
                        ))}
                    </div>
                </InfoWrapper>
            </IngredientsWrapper>
           
            <div>
                <div>
                    <h2>Elaboración:</h2>
                    <ul>
                        {recipe?.steps.map((step, index) => (
                            <List key={index}>
                                <NumberStep>{index + 1}</NumberStep>
                                {step}
                            </List>
                        ))}
                    </ul>
                </div>
            </div>
        </>
    )
}

export default RecipeSteps