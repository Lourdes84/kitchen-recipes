import { StyledLink } from './styles'

const LinkButton = ({href, text}) => {
    return (
        <StyledLink href={href}>
            {text}
        </StyledLink>
    )
}

export default LinkButton