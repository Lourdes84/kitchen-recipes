import { TitleWrapper, StyledTitle } from './styles'

const CustomizedTitle = ({text, withoutMargin}) => {
    return (
        <TitleWrapper withoutMargin={withoutMargin} >
            <StyledTitle>{text}</StyledTitle>
        </TitleWrapper>
    )
}

export default CustomizedTitle