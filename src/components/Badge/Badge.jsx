import { BadgeWrapper } from './styles'

const Badge = ({ text }) => {
    
    const getColor = (category) => {
        const colors = {
            "Popular": "#c3bef2",
            "Healthy": "#90F297",
            "Vegetariana": "#27AD7E",
            "Postre": "#F6BCF1",
            "Fácil": "#fbe751",
            "Media": "#f0b41d",
            "Alta": "#de714a"
        }
        return colors[category] || '#FDEED3'
    }

    const backgroundColor = getColor(text)

    return (
        <BadgeWrapper style={{ backgroundColor }}>
            {text}
        </BadgeWrapper>
    )
}

export default Badge