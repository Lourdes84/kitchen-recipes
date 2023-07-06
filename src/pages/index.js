import Head from 'next/head'
import { recipes } from './../data/recipes'
import Aside from '@/layout/Aside/Aside'
import RecipeCard from '@/components/RecipeCard/RecipeCard'
import { useContext } from 'react'
import { SearchContext } from '@/context/SearchContext'
import CustomizedTitle from '@/components/CustomizedTitle/CustomizedTitle'
import LinksInterest from '@/components/LinksInterest/LinksInterest'
import SocialMediaBanner from '@/components/SocialMediaBanner/SocialMediaBanner'

const Home = () => {
  const { searchResults } = useContext(SearchContext)
  const isPopular = "Popular"
  const listRecipes = searchResults.length ? searchResults : recipes

  return (
    <>
      <Head>
        <title>Barriga llena corazón contento - Recetas de cocina fáciles y ricas</title>
        <meta name="description" content="Las mejores recetas de cocina explicadas de una manera fácil y clara, con la que conseguirás los platos más sabrosos" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/tenedor.svg" />
      </Head>
      <>  
          <div className="container">
              <main>
                  <div>
                    <CustomizedTitle withoutMargin text="Recetas populares" />
                  </div>
                  <div className="recipes">
                    {listRecipes.map((recipe, index) => (
                      recipe.category === isPopular && (
                        <RecipeCard 
                            key={index}
                            data={recipe}
                        />
                      )
                    ))}
                  </div>
              </main>
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
              //margin-top: 150px;
              margin-top: 9.3rem;

              @media (max-width: 1840px) {
                flex-direction: column;
              }


            @media (max-width: 1070px) {
              margin-top: 16.2rem;
            }

            @media (max-width: 640px) {
              margin-top: 31.2rem;
            }

            /*   @media (max-width: 1070px) {
                margin-top: 260px;
              }

              @media (max-width: 640px) {
                margin-top: 500px;
              } */
            }
          
            main {
              display: flex;
              flex-direction: column;
            }

            .recipes {
              display: flex;
              gap: 50px;
              flex-wrap: wrap;
              justify-content: center;
            }
        `}
      </style>
    </>
  )
}

export default Home