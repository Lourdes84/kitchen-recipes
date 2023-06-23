import CustomizedTitle from "@/components/CustomizedTitle/CustomizedTitle"
import Head from "next/head"
import MainContainer from "@/layout/MainContainer/MainContainer"

const Postres = () => {
    const isDesert = "Postre"
    
    return (
        <>
            <Head>
                <title>Los mejores postres fáciles y ricos - Barriga llena corazón contento</title>
                <meta name="description" content="Los mejores postres explicados de una manera fácil y clara, con la que conseguirás endulzarte el corazón" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/tenedor.svg" />
            </Head>

            <CustomizedTitle text="Postres" />
            <MainContainer typeOfRecipe={isDesert} />
        </> 
    )
}

export default Postres