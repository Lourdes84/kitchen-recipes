import { useState, useEffect } from 'react'
import { RiMenuUnfoldFill } from 'react-icons/ri'
import { MdOutlineRestaurantMenu } from 'react-icons/md'
import { menuLinks } from '../../../../data/menuLinks'
import {Icon, StyledNav, LinksWrapper, StyledLink, StyledDropdown, StyledLinkDropdown} from './styles'
import Link from 'next/link'
import Logo from '@/components/Logo/Logo'

const NavMenu = ({isSmallScreen, showSearchbar }) => {
    const [ showResponsiveMenu, setShowResponsiveMenu ] = useState(false)
    const [ showDropdown, setShowDropdown ] = useState(false)

    const menuIcon = showResponsiveMenu ? MdOutlineRestaurantMenu : RiMenuUnfoldFill 

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

            <Logo hidden={showSearchbar && isSmallScreen} />

            <StyledNav showResponsive={showResponsiveMenu}>
                <LinksWrapper>
                    {menuLinks.map((link, index) => 
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