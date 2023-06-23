import Link from 'next/link'
import Newsletter from './components/Newsletter'
import { AsideWrapper, Block, Title, ImageWrapper, PostWrapper } from './styles'

const Aside = () => {
    const posts = [
        {
            img: "/images/post-01.jpg",
            alt: "El batch cooking",
            url: "/posts/batchcooking",
            title: "El batch cooking"
        },
        {
            img: "/images/post-02.jpg",
            alt: "Tipos de panes",
            url: "/posts/panes",
            title: "Tipos de panes"
        },
        {
            img: "/images/post-03.jpg",
            alt: "Smoothies saludables",
            url: "/posts/smoothies",
            title: "Smoothies saludables"
        }
    ]

    return (
        <AsideWrapper>
            <Block>
                <Title>
                    <p>Sobre esta web</p>
                </Title>
                <PostWrapper profileWrapper>
                    <ImageWrapper>
                        <img src="/images/logo.jpg" alt="logo" />
                    </ImageWrapper>
                    <p>Esta página web es un proyecto de código abierto diseñado con el propósito de permitir la práctica de habilidades en el desarrollo de Frontend, 
                        así como para poder ser exhibido como un ejemplo de competencias en un portafolio, sin ninguna finalidad específica.</p>
                    <br />
                    <p>Las recetas presentes en la página han sido obtenidas de las fuentes listadas en los enlaces de interés.</p>
                </PostWrapper>
            </Block>

            <Block>
                <Title>
                    <p>Top posts</p>
                </Title>
                <div>
                    {posts.map((post, index) => (
                         <PostWrapper key={index}>
                            <ImageWrapper small>
                                <img src={post.img} alt={post.alt} />
                            </ImageWrapper>
                            <Link href={post.url}>
                                {post.title}
                            </Link>
                        </PostWrapper>
                    ))}
                </div>
            </Block>
            <Newsletter />
        </AsideWrapper>
    )
}

export default Aside