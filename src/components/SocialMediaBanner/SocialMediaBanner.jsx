import { BsTwitter, BsInstagram, BsFacebook, BsYoutube } from 'react-icons/bs'
import { BannerWrapper, Content, SocialMediaWrapper, StyledSpan } from './styles'

const SocialMediaBanner = () => {
    return (
        <BannerWrapper>
            <Content>
                <h2>Síguenos en nuestras redes sociales:</h2>
                <SocialMediaWrapper>
                    <StyledSpan><BsTwitter />Twitter</StyledSpan>
                    <StyledSpan> <BsInstagram />Instagram</StyledSpan>
                    <StyledSpan><BsFacebook />FaceBook</StyledSpan>
                    <StyledSpan> <BsYoutube />YouTube</StyledSpan> 
                </SocialMediaWrapper>
            </Content>
        </BannerWrapper>
    )
}

export default SocialMediaBanner