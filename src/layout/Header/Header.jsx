import { useState, useEffect } from 'react'
import Searchbar from '@/layout/Header/components/Searchbar/Searchbar'
import { HeaderWrapper, NavWrapper } from './styles'
import { useRouter } from 'next/router'
import NavMenu from './components/NavMenu/NavMenu'

const Header = () => {
    const router = useRouter()
    const isContactPage = router.pathname === "/contacto"
    const isRecipePage = router.pathname.includes("/receta")
    const isPostsPage = router.pathname.includes("/posts")
    const isFoodsPage = router.pathname.includes("/comidas")
    const [ isSmallScreen, setIsSmallScreen ] = useState(false)
    const [ showSearchbar, setShowSearchbar ] = useState(false)
    
    useEffect(() => {
        const handleResize = () => setIsSmallScreen(window.innerWidth < 1200)
        window.addEventListener('resize', handleResize)
        handleResize()
        return () => window.removeEventListener('resize', handleResize)
    }, [] )

    return (
        <HeaderWrapper>
            <NavWrapper>
                <NavMenu
                    isSmallScreen={isSmallScreen}
                    showSearchbar={showSearchbar}
                />
                <Searchbar 
                    placeholder="Buscar nombre receta"
                    showSearchbar={showSearchbar}
                    setShowSearchbar={setShowSearchbar}
                    disabled={isContactPage || isRecipePage || isPostsPage || isFoodsPage} 
                />
            </NavWrapper>
        </HeaderWrapper>
    )
}

export default Header