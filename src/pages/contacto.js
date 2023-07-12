import ContactForm from "@/components/ContactForm/ContactForm"
import CustomizedTitle from "@/components/CustomizedTitle/CustomizedTitle"
import Head from "next/head"

const Contacto = () => {

    return (
      <>
          <Head>
            <title>Contacta con nosotros - Barriga llena corazón contento</title>
            <meta name="description" content="Te gustaría hacernos llegar alguna receta? Tienes alguna sugerencia? No dudes en contactar con nosotros" />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <link rel="icon" href="/tenedor.svg" />
          </Head>

          <CustomizedTitle text="Contacto" />
          <main className="main-wrapper">
            <ContactForm />
          </main>
      </>
    )
}

export default Contacto