import { useState, useEffect } from 'react'
import { IoIosArrowDown } from 'react-icons/io'
import { BsFillHeartPulseFill} from 'react-icons/bs'
import { BiLeaf } from 'react-icons/bi'
import { GiWrappedSweet } from 'react-icons/gi'
import { RiMenuUnfoldFill } from 'react-icons/ri'
import { MdOutlineRestaurantMenu } from 'react-icons/md'
import {Icon, StyledNav, LinksWrapper, StyledLink, StyledDropdown, StyledLinkDropdown} from './styles'
import Link from 'next/link'
import Logo from '@/components/Logo/Logo'

const NavMenu = ({isSmallScreen, showSearchbar }) => {
    const [ showResponsiveMenu, setShowResponsiveMenu ] = useState(false)
    const [ showDropdown, setShowDropdown ] = useState(false)

    const menuIcon = showResponsiveMenu ? MdOutlineRestaurantMenu : RiMenuUnfoldFill 

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
        }
    ]

    const handleMenuIconClick = () => {
        setShowResponsiveMenu(!showResponsiveMenu)
        setShowDropdown(false)
    }

    const handleLinkClick = () => {
        setShowResponsiveMenu(false)
        setShowDropdown(false)
    }

    useEffect(() => {
        const handleScroll = () => {
            setShowResponsiveMenu(false)
            setShowDropdown(false)
        }
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [] )

    return (
        <>
            {isSmallScreen && <Icon as={menuIcon} onClick={handleMenuIconClick} /> }

            <Logo hidden={showSearchbar} />

            <StyledNav showResponsive={showResponsiveMenu}>
                <LinksWrapper>
                    {linkOptions.map((link, index) => 
                        <li key={index}>
                            <StyledLink 
                                href={link.url}
                                onClick={() => link.dropdown ? setShowDropdown(!showDropdown) : setShowResponsiveMenu(false)}
                            >
                                {link.name}
                                {link.icon}
                            </StyledLink>
                            {link.dropdown && (
                                <StyledDropdown showDropdown={showDropdown} onMouseLeave={() => setShowDropdown(false)}>
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
        </>
    )
}

export default NavMenu