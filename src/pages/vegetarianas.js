import Head from 'next/head'
import CustomizedTitle from "@/components/CustomizedTitle/CustomizedTitle"
import MainContainer from '@/layout/MainContainer/MainContainer'

const Vegetarianas = () => {
  const isVegetarian = "Vegetariana"

    return (
        <>
            <Head>
              <title>Recetas vegetarianas fáciles y ricas - Barriga llena corazón contento</title>
              <meta name="description" content="Las mejores recetas vegetarianas explicadas de una manera fácil y clara, con la que conseguirás los platos más sabrosos" />
              <meta name="viewport" content="width=device-width, initial-scale=1" />
              <link rel="icon" href="/tenedor.svg" />
            </Head>

            <CustomizedTitle text="Vegetarianas" />
            <MainContainer typeOfRecipe={isVegetarian} />
        </>
    )
}

export default Vegetarianas