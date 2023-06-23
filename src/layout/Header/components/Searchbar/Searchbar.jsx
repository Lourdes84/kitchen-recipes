import { SearchBarWrapper, StyledInput } from './styles'
import { BsSearch } from 'react-icons/bs'
import { RxCross2 } from 'react-icons/rx'
import { useContext, useState } from 'react'
import { SearchContext } from '@/context/SearchContext'

const Searchbar = ({ placeholder, disabled }) => {
    const [ query, setQuery ] = useState("")
    const [ showCrossIcon, setShowCrossIcon ] = useState(false)
    const { search } = useContext(SearchContext)
    const queryNotEmpty = query !== ""

    const handleKeyDown = (e) => {
        const enterKeyPressed = e.key === "Enter"

        if(enterKeyPressed && queryNotEmpty) {
            e.preventDefault() 
            setShowCrossIcon(true) 
            search(query)
            return
        } 
        search("")
        setShowCrossIcon(false) 
    }

    const searchQuery = () => {
        if(queryNotEmpty) {
            search(query)
            setShowCrossIcon(true)
        }
    }

    const clearSearch = () => {
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
                disabled={disabled}
            />
            {showCrossIcon ? <RxCross2 onClick={clearSearch} /> : <BsSearch onClick={searchQuery} />}
        </SearchBarWrapper>
    )
}

export default Searchbar