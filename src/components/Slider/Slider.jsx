import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import "swiper/css/navigation";
import { Autoplay, Navigation, Mousewheel, Keyboard } from "swiper";
import { SliderWrapper, ImageSlide, FoodOptionsWrapper, StyledLink, FoodOptions, TitleOption, ImageOption } from './styles'

const Slider = () => {

    const images = [ "slider-01.webp", "slider-02.webp", "slider-03.webp", "slider-04.webp", "slider-05.webp" ]
    
    const options = [
        {
            title: "Desayunos",
            img: "foodOptions-01.webp",
            url: "/comidas/desayunos"
        },
        {
            title: "Almuerzos",
            img: "foodOptions-02.webp",
            url: "/comidas/almuerzos"
        },
        {
            title: "Meriendas",
            img: "foodOptions-03.webp",
            url: "/comidas/meriendas"
        },
        {
            title: "Cenas",
            img: "foodOptions-04.webp",
            url: "/comidas/cenas"
        },
    ]
            
    return (
        <SliderWrapper>
            <Swiper
                spaceBetween={0}
                slidesPerView={3}
                autoplay={{
                    delay: 4000,
                    disableOnInteraction: false,
                  }}
                breakpoints={{
                        0: {
                          slidesPerView: 1,
                        },
                        768: {
                          slidesPerView: 2,
                        },
                        1024: {
                          slidesPerView: 3,
                        }
                      }}
                cssMode={true}
                navigation={true}
                mousewheel={true}
                keyboard={true}
                modules={[Autoplay, Navigation, Mousewheel, Keyboard]}
            >
                 {images.map((image, index) => 
                    <SwiperSlide key={index}>
                        <ImageSlide src={`/images/slider/${image}`} alt={image} />
                    </SwiperSlide>
            )}
            </Swiper>
            
            <FoodOptionsWrapper>
                {options.map((option, index) => 
                    <StyledLink href={option.url} key={index}>
                        <FoodOptions>
                            <TitleOption>
                                {option.title}
                            </TitleOption>
                            <ImageOption src={`/images/foodOptions/${option.img}`} alt={option.title} />
                        </FoodOptions>
                    </StyledLink>
                )}
            </FoodOptionsWrapper>
        </SliderWrapper>
    )
}

export default Slider