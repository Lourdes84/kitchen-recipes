import Head from 'next/head'
import Aside from '@/layout/Aside/Aside'
import LinksInterest from '@/components/LinksInterest/LinksInterest'
import SocialMediaBanner from '@/components/SocialMediaBanner/SocialMediaBanner'
import MainContainer from '@/layout/MainContainer/MainContainer'
import { useEffect, useState } from 'react'

const Home = () => {
  const isPopular = "Popular"

  const [ isSmallScreen, setIsSmallScreen ] = useState(false)

  useEffect(() => {
    const handleResize = () => setIsSmallScreen(window.innerWidth < 1840)
    window.addEventListener('resize', handleResize)
    handleResize()
    return () => window.removeEventListener('resize', handleResize)
}, [] )


  return (
    <>
      <Head>
        <title>Barriga llena corazón contento - Recetas de cocina fáciles y ricas</title>
        <meta name="description" content="Las mejores recetas de cocina explicadas de una manera fácil y clara, con la que conseguirás los platos más sabrosos" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/tenedor.svg" />
      </Head>
      <>  
          <div className={isSmallScreen ? "container-small" : "container"}>
              <MainContainer typeOfRecipe={isPopular} />
              <Aside />
          </div>
          <SocialMediaBanner />
          <LinksInterest />
      </>

      <style jsx>
        {`
            .container {
              display: flex;
              justify-content: center;
              gap: 60px;

              @media (max-width: 1840px) {
                flex-direction: column;
              }

              @media (min-width: 1071px) {
                margin-top: 150px;
              }
            }

            .container-small {
              display: flex;
              justify-content: center;
              gap: 60px;

              @media (max-width: 1840px) {
                flex-direction: column;
              }

              @media (min-width: 1071px) {
                margin-top: 150px;
              }
              
            }
        `}
      </style>
    </>
  )
}

export default Home