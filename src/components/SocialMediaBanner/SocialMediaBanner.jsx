import { BsTwitter, BsInstagram, BsFacebook, BsYoutube } from 'react-icons/bs'
import { BannerWrapper, SocialMediaWrapper, StyledSpan } from './styles'

const SocialMediaBanner = () => {
    return (
        <BannerWrapper>
            <h2>Síguenos en nuestras redes sociales:</h2>
            <SocialMediaWrapper>
                <StyledSpan><BsTwitter />Twitter</StyledSpan>
                <StyledSpan> <BsInstagram />Instagram</StyledSpan>
                <StyledSpan><BsFacebook />FaceBook</StyledSpan>
                <StyledSpan> <BsYoutube />YouTube</StyledSpan> 
            </SocialMediaWrapper>
        </BannerWrapper>
    )
}

export default SocialMediaBanner