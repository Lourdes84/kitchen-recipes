import Head from 'next/head'
import Aside from '@/layout/Aside/Aside'
import LinksInterest from '@/components/LinksInterest/LinksInterest'
import SocialMediaBanner from '@/components/SocialMediaBanner/SocialMediaBanner'
import MainContainer from '@/layout/MainContainer/MainContainer'
import styled from 'styled-components'

export const HomeContainer = styled.div`
    display: flex;
    justify-content: center;
    gap: 60px;

    @media (max-width: 1840px) {
        flex-direction: column;
    }

    @media (min-width: 1071px) {
        margin-top: 150px;
    }
`

const Home = () => {
  const isPopular = "Popular"

  return (
    <>
      <Head>
        <title>Barriga llena corazón contento - Recetas de cocina fáciles y ricas</title>
        <meta name="description" content="Las mejores recetas de cocina explicadas de una manera fácil y clara, con la que conseguirás los platos más sabrosos" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/tenedor.svg" />
      </Head>
      
      <HomeContainer>
          <MainContainer typeOfRecipe={isPopular} />
          <Aside />
      </HomeContainer>
      <SocialMediaBanner />
      <LinksInterest />
    </>
  )
}

export default Home