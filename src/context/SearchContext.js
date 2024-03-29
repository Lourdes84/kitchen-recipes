import { recipes } from "@/data/recipes";
import { createContext, useState } from "react";

export const SearchContext = createContext()

export const SearchProvider = ({ children }) => {
    const [ searchResults, setSearchResults ] = useState([])
    
    const search = (query) => {
        const results = recipes.filter((recipe) => 
        recipe.title.toLocaleLowerCase().includes(query.toLocaleLowerCase()))
        if(results.length > 0) {
            return setSearchResults(results)
        } 
        return setSearchResults('empty')   
    }

    return (
        <SearchContext.Provider value={{ searchResults, search }}>
            {children}
        </SearchContext.Provider>
    )
}
