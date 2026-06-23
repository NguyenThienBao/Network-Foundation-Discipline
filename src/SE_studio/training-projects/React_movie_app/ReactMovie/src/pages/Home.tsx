import MovieCard from "../components/MovieCard"
import {useState, useEffect} from "react"
import {getPopularMovies, searchMovies} from '../services/api'

export default function Home () {
    const [searchQuery, setSearchQuery] = useState("");
    const [movies, setMovies] = useState([]);
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const loadPopularMovies = async () => {
            try {
                const popularMovies = await getPopularMovies();
                setMovies(popularMovies)
            } catch(err) {
                console.log(err)
                setError("Failed to load data for movies")
            } finally {
                console.log(movies)
                setLoading(false)
            }
        }

        loadPopularMovies();
    }, [])

    const handleSearch = async (e : React.SyntheticEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (!searchQuery.trim()) return
        if (loading) return

        setLoading(true)
        try {
            const searchResults = await searchMovies(searchQuery)
            setMovies(searchResults)
            setError("")
        } catch(err) {
            console.log(err)
            setError('Failed to search movies...')
        } finally {
            setLoading(false)
        }

        setSearchQuery("")
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

            { error && <div className="error-message">{error}</div> }

            { loading ? ( <div className='loading'>Loading...</div> ) : (
                <div className="movies-grid">
                    { movies && movies.map((movie) => (
                        <MovieCard movie={movie} key={movie.id} /> 
                    ))}
                </div>
            )}
        </div>
    )
}