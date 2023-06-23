import CustomizedTitle from "@/components/CustomizedTitle/CustomizedTitle"
import Head from "next/head"
import MainContainer from "@/layout/MainContainer/MainContainer"

const Healthy = () => {
    const isHealthy = "Healthy"
   
    return (
      <>
          <Head>
            <title>Las mejores recetas healthy fáciles y ricas - Barriga llena corazón contento</title>
            <meta name="description" content="Las mejores recetas healthy explicadas de una manera fácil y clara, con la que conseguirás disfrutar la comida mientras te cuidas" />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <link rel="icon" href="/tenedor.svg" />
          </Head>

          <CustomizedTitle text="Healthy" />
          <MainContainer typeOfRecipe={isHealthy} />
      </>
    )
}

export default Healthy