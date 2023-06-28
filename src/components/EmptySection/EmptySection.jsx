import { EmptyWrapper, ImageWrapper, StyledText } from './styles'

const EmptySection = ({ text, emptyContent, inConstruction}) => {
    return (
        <EmptyWrapper>
            {emptyContent && (
                <ImageWrapper>
                    <img src="/images/empty.webp" alt="Nada agregado" />
                </ImageWrapper>
            )}
            {inConstruction && (
                <div>
                    <img src="/images/under-construction.webp" alt="En construcción" />
                </div>
            )}
            <StyledText bottomText={inConstruction}>{text}</StyledText>
        </EmptyWrapper>
    )

}

export default EmptySection