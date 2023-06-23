import { useRouter } from 'next/router'
import Slider from "@/components/Slider/Slider"
import Footer from "./Footer/Footer"
import Header from "./Header/Header"
import { Content } from './styles'

const Layout = ({ children }) => {
    const router = useRouter()
    const isHomePage = router.pathname === "/"

    return (
        <>
            <Header />
                {isHomePage && <Slider /> }
                <Content>{children}</Content>
            <Footer />
        </>
    )
}

export default Layout