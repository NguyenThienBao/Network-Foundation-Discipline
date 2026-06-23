const API_KEY = "a00150780b41fa9c8149770945e1c00f";
const BASE_URL = "https://api.themoviedb.org/3"

export const getPopularMovies = async () => {
    const response = await fetch(`${BASE_URL}/movie/popularerror?api_key=${API_KEY}`)
    const data = await response.json()
    return data.results
};

export const searchMovies = async (query : String) => {
    const response = await fetch(`${BASE_URL}/search/movie?api_key=${API_KEY}&query${encodeURIComponent(query)}`)
    const data = await response.json()
    return data.results
};