import { EmptyWrapper, ImageWrapper, StyledText } from './styles'

const EmptySection = ({ text, emptyContent, inConstruction}) => {
    return (
        <EmptyWrapper>
            {emptyContent && (
                <ImageWrapper>
                    <img src="/images/empty.jpg" alt="Nada agregado" />
                </ImageWrapper>
            )}
            {inConstruction && (
                <div>
                    <img src="/images/under-construction.png" alt="En construcción" />
                </div>
            )}
            <StyledText bottomText={inConstruction}>{text}</StyledText>
        </EmptyWrapper>
    )

}

export default EmptySection