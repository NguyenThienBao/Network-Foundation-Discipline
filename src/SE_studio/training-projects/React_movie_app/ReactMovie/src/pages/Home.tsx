import MovieCard from "../components/MovieCard"
import {useState} from "react"

export default function Home () {
    const [searchQuery, setSearchQuery] = useState("");

    const movies = [
        {id: 1, title: "John Wick", release_date: "2020"},
        {id: 2, title: "Terminator", release_date: "2019"},
        {id: 3, title: "Alien", release_date: "2022"}
    ]

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