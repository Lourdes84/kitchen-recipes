import {LogoWrapper} from './styles'

const Logo = ({hidden}) => {
    return (
        <LogoWrapper hidden={hidden}>
            <img src="/images/logo.webp" alt="logo" />
        </LogoWrapper>
    )
}

export default Logo