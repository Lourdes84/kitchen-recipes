import { useState, useEffect } from 'react'
import Searchbar from '@/layout/Header/components/Searchbar/Searchbar'
import { IoIosArrowDown } from 'react-icons/io'
import { BsFillHeartPulseFill} from 'react-icons/bs'
import { RiMenuUnfoldFill } from 'react-icons/ri'
import { MdOutlineRestaurantMenu } from 'react-icons/md'
import { BiLeaf } from 'react-icons/bi'
import { GiWrappedSweet } from 'react-icons/gi'
import { HeaderWrapper, NavWrapper, LogoWrapper, Icon, StyledNav, LinksWrapper, StyledLink,
    StyledDropdown, StyledLinkDropdown } from './styles'
import Link from 'next/link'
import { useRouter } from 'next/router'

const Header = () => {
    const router = useRouter()
    const isContactPage = router.pathname === "/contacto"
    const [ isSmallScreen, setIsSmallScreen ] = useState(false)
    const [ showResponsiveMenu, setShowResponsiveMenu ] = useState(false)
    const [ showSearchbar, setShowSearchbar ] = useState(false)
    const [ showDropdown, setShowDropdown ] = useState(false)
    const menuIcon = showResponsiveMenu ? MdOutlineRestaurantMenu : RiMenuUnfoldFill 
    
    useEffect(() => {
        const handleResize = () => setIsSmallScreen(window.innerWidth < 1200)
        window.addEventListener('resize', handleResize)
        handleResize()
        return () => window.removeEventListener('resize', handleResize)
    }, [] )

    useEffect(() => {
        const handleScroll = () => {
            setShowResponsiveMenu(false)
            setShowDropdown(false)
        }
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [] )

    const linkOptions = [
        {
            url: "/",
            name: "Home",
            icon: null,
            dropdown: false
        },
        {
            url: "/favoritos",
            name: "Favoritos",
            icon: null,
            dropdown: false,
        },
        {
            url: "#",
            name: "Recetas",
            icon:  <IoIosArrowDown />,
            dropdown: true,
            dropdownLinks : [
                {
                    name: "Healthy",
                    url: "/healthy",
                    icon: <BsFillHeartPulseFill />
                },
                {
                    name: "Vegetarianas",
                    url: "/vegetarianas",
                    icon: <BiLeaf /> 
                },
                {
                    name: "Postres",
                    url: "/postres",
                    icon:  <GiWrappedSweet />
                }
            ]
        },
        {
            url: "/contacto",
            name: "Contacto",
            icon: null,
            dropdown: false,
        },
    ]

    const handleMenuIconClick = () => {
        setShowResponsiveMenu(!showResponsiveMenu)
        setShowDropdown(false)
    }

    const handleLinkClick = () => {
        setShowResponsiveMenu(false)
        setShowDropdown(false)
    }
    
    return (
        <HeaderWrapper>
            <NavWrapper>
                {isSmallScreen && <Icon as={menuIcon} onClick={handleMenuIconClick} /> }
                <LogoWrapper className={showSearchbar ? "hidde-logo" : ""}>
                    <img src="/images/logo.webp" alt="logo" />
                </LogoWrapper>
                        <StyledNav className={showResponsiveMenu ? "show-responsive" : ""}>
                            <LinksWrapper>
                                {linkOptions.map((link, index) => 
                                    <li key={index}>
                                        <StyledLink 
                                            href={link.url}
                                            onClick={() => {
                                                link.dropdown ? setShowDropdown(!showDropdown) : setShowResponsiveMenu(false)
                                                
                                            }}
                                        >
                                            {link.name}
                                            {link.icon}
                                        </StyledLink>
                                        {link.dropdown && (
                                            <StyledDropdown className={showDropdown ? "show-dropdown" : ""} onMouseLeave={() => setShowDropdown(false)}>
                                                {link.dropdownLinks.map((link, index) =>
                                                    <Link href={link.url} key={index} onClick={handleLinkClick}>
                                                        <StyledLinkDropdown>
                                                            {link.icon}
                                                            {link.name}
                                                        </StyledLinkDropdown>
                                                    </Link>
                                                )}
                                            </StyledDropdown>
                                        )}
                                    </li>
                                )}    
                            </LinksWrapper>
                        </StyledNav>
                        <Searchbar 
                            placeholder="Buscar nombre receta"
                            showSearchbar={showSearchbar}
                            setShowSearchbar={setShowSearchbar}
                            disabled={isContactPage} 
                        />
            </NavWrapper>
        </HeaderWrapper>
    )
}

export default Header