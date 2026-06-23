import React from 'react'
import "../../css/MovieCard.css"

export type Movie = {
    id : string
    title? : string,
    url? : string, 
    release_date? : string
    poster_path? : any
}

type MovieProps = { 
    movie : Movie
}

class MovieCard extends React.Component<MovieProps> {
    public constructor(props : MovieProps) {
        super(props)
    }

    private onFavoriteClick() {
        console.log(`Added ${this.props.movie.title} to favorites!`);
    }

    public render(): React.ReactNode {
        return (
            <div className='movie-card'>
                <div className='movie-poster'>
                    <img src={`https://image.tmdb.org/t/p/w500${this.props.movie.poster_path}`} alt={this.props.movie.title}/>
                    <div className='movie-overlay'>
                        <button className="favorite-btn" onClick={this.onFavoriteClick}></button>
                    </div>
                </div>
                <div className='movie-info'>
                    <h3>{this.props.movie.title}</h3>
                    <p>{this.props.movie.release_date}</p>
                </div>
            </div>
        )
    }
}

export default MovieCard

