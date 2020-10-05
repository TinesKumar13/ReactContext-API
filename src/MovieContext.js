import React, {useState, createContext} from 'react';


export const MovieContext = createContext()

export const MovieProvider = (props) => {
    const [movies, setMovies] = useState([
        {
            name:"Harry Potter",
            price: "RM20",
            id: 23124
        },
        {
            name:"Inception",
            price: "RM10",
            id: 23345
        },
        {
            name:"Koala Bear",
            price: "RM90",
            id: 23930
        },
    ])

    return <MovieContext.Provider value={[movies,setMovies]}>{props.children}</MovieContext.Provider>

    
}