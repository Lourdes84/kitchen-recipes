import { IoIosArrowDown } from 'react-icons/io'
import { BsFillHeartPulseFill} from 'react-icons/bs'
import { BiLeaf } from 'react-icons/bi'
import { GiWrappedSweet } from 'react-icons/gi'

export const menuLinks = [
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