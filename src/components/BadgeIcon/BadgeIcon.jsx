import { BiTime } from 'react-icons/bi'
import { HiOutlineUsers } from 'react-icons/hi'
import { BadgeIconWrapper } from './styles'

const BadgeIcon = ({timeCooking, diners, text}) => {
    return (
        <BadgeIconWrapper>
            {timeCooking && <BiTime />}
            {diners && <HiOutlineUsers />}
            <span>{text}</span>
        </BadgeIconWrapper>
    )
}

export default BadgeIcon