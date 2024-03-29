import { SearchBarWrapper, StyledInput, SearchIcon } from './styles'
import { RxCross2 } from 'react-icons/rx'
import { useContext, useState } from 'react'
import { SearchContext } from '@/context/SearchContext'

const Searchbar = ({ placeholder, showSearchbar, setShowSearchbar, disabled }) => {
    const [ query, setQuery ] = useState("")
    const [ showCrossIcon, setShowCrossIcon ] = useState(false)
    const { search } = useContext(SearchContext)

    const handleKeyDown = (e) => {
        const enterKeyPressed = e.key === "Enter"

        if(enterKeyPressed && query) {
            e.preventDefault() 
            setShowCrossIcon(true) 
            search(query)
            return
        } 
        search("")
        setShowCrossIcon(false) 
    }

    const searchQuery = () => {
        setShowSearchbar(!showSearchbar)
        if(query) {
            search(query)
            setShowCrossIcon(true)
            setShowSearchbar(true)
        }
    }

    const clearSearch = () => {
        setShowSearchbar(false)
        setShowCrossIcon(false)
        setQuery("")
        search("")
    }

    return (
        <SearchBarWrapper>
            <StyledInput 
                type="text"
                placeholder={placeholder} 
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                onKeyDown={handleKeyDown}
                showSearchbar={showSearchbar}
                disabled={disabled}
            />
            {showCrossIcon ? 
            <RxCross2 onClick={clearSearch} /> 
            : <SearchIcon onClick={searchQuery} disabled={disabled} />}
        </SearchBarWrapper>
    )
}

export default Searchbar