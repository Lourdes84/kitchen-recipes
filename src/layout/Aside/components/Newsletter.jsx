import {Block, Title, StyledButton} from './../styles'

const Newsletter = () => {
    return (
        <Block>
            <Title tall>
                <p>Suscribe in Newsletter</p>
                <input type="email" placeholder="E-mail" />
                <StyledButton type="submit">Enviar</StyledButton>
            </Title>
        </Block>
    )
}

export default Newsletter