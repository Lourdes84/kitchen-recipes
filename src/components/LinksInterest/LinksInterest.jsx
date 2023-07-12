import Link from "next/link"
import CustomizedTitle from "../CustomizedTitle/CustomizedTitle"
import { SliderWrapper, SlideTrack, Slide} from './styles'

const LinksInterest = () => {
    const linkOptions = [
        {
            url: "https://www.recetasderechupete.com/",
            img: "recetas-rechupete.webp",
            alt: "Recetas de rechupete"
        },
        {
            url: "https://www.recetasgratis.net/",
            img: "recetas-gratis.webp",
            alt: "Recetas gratis"
        },
        {
            url: "https://www.javirecetas.com/",
            img: "javi-recetas.webp",
            alt: "Javi recetas"
        },
        {
            url: "https://www.directoalpaladar.com/",
            img: "directo-paladar.webp",
            alt: "Directo al paladar"
        },
        {
            url: "https://canalcocina.es/",
            img: "canal-cocina.webp",
            alt: "Canal cocina"
        },
        {
            url: "https://maille.com.es/",
            img: "maille.webp",
            alt: "Maille"
        },
        {
            url: "https://deliciousmartha.com/",
            img: "delicious-martha.webp",
            alt: "Delicious Martha"
        }
    ]
    return (
        <section>
            <CustomizedTitle text="Enlaces de Interés" />
            <SliderWrapper>
                <SlideTrack>
                    {linkOptions.map((option, index) => (
                         <Slide key={index}>
                            <Link href={option.url} target="_blank">
                                <img src={`/images/linksInterest/${option.img}`} alt={option.alt} />
                            </Link>
                        </Slide>
                    ))}
                </SlideTrack>
            </SliderWrapper>
        </section>
    )
}

export default LinksInterest