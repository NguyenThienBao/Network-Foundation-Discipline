import MovieCard from "../components/MovieCard"
import {useState, useEffect} from "react"
import {getPopularMovies, searchMovies} from '../services'

export default function Home () {
    const [searchQuery, setSearchQuery] = useState("");

    

    const handleSearch = (e : React.SyntheticEvent<HTMLFormElement>) => {
        e.preventDefault()
        alert(searchQuery)
        setSearchQuery("------")
    }

    return (
        <div className="Home">
            <form onSubmit={handleSearch} className="search-form">
                <input 
                    type="text" 
                    placeholder="Search for movies..." 
                    className="search-input"
                    value={searchQuery}
                    onChange={(e => setSearchQuery(e.target.value))}
                />
                <button type="submit" className="search-btn">Search</button>
            </form>
            <div className="movies-grid">
                { movies.map( 
                    movie =>
                        movie.title.toLowerCase().startsWith(searchQuery) &&
                        <MovieCard movie={movie} key={movie.id}/> 
                )}
            </div>
        </div>
    )
}