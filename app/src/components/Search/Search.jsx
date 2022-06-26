import React, {useEffect, useState} from 'react'
import './Search.css'
import Card from '../Card/Card'
import Loader from './Loader'
import Btn from '../Accessories/Btn';

function Search() {

    const [input,setInput] = useState("Mission: impossible");
    const [search,setSearch] = useState("Mission: impossible");
    const [final,setFinal] = useState("tt0376994")
    const [movies,setMovies] = useState([]);
    const [searches,setSearches] = useState([]);
    const [trendings,setTrendings] = useState([]);
    const [loading, setLoading] = useState(false)
    const [loading3, setLoading3] = useState(false)
    const [loading2, setLoading2] = useState(false)

    useEffect(() => {
        getSearchedMovies();
        
    }, [search])
    useEffect(() => {
        getRecommendedMovies();
        
    }, [final])
    useEffect(() => {
        getTrendings();
        
    }, [])

    const handleSubmit = e => {
        e.preventDefault();
        setSearch(input);
    }
    const updateInput = e => {
        setInput(e.target.value);
        //console.log(search)
      };

    const getRecommendedMovies = async () => {
        try {
            setLoading2(true);
            const response = await fetch(`https://more-movie-recommendation.herokuapp.com/recommend-movie/${final}?limit=10`);
            const data = await response.json();
            setMovies(data.result);
            console.log(data.result);
            setLoading2(false);
            
        }
        catch {
            
        }
    }
    const getSearchedMovies = async () => {
        try {
            setLoading(true);
            const response = await fetch(`https://more-movie-recommendation.herokuapp.com/get-movies-from-title/${search}`);
            const data = await response.json();
            setSearches(data);
            setLoading(false);
        }
        catch {
            
        }
    }
    const getTrendings = async () => {
        try {
            setLoading3(true);
            const r = await fetch(`https://api.themoviedb.org/3/trending/movie/week?api_key=86b01c870d192d9c90bfbfbc18d9d37a`);
            const d = await r.json();
            setTrendings(d.results);
            setLoading3(false);
            
            
        }
        catch {

        }
      }
      

    return (
        <div className="search">
            <h1 className="header">Search and browse movies!</h1>
            <div className="search-sec">
            <form action="submit" onSubmit={handleSubmit}>
                <input placeholder="Movie Name" value={input} onChange={updateInput} className="select"/>
                <button className="submit">&#8594;</button>
            </form>
            </div>
            
            {searches.length > 0 && !loading ? <h1 className="invalid">Did you mean any of these movies ?</h1> : <h1 className="invalid"></h1>}
            <div className="container">
                {
                    searches.length < 1 && !loading && <div className="invalid">Please enter a valid movie name above !</div>
                }
                {
                    !loading ? searches.slice(0,10).map((movie) => (
                        <button className="btn" onClick={(e) => {
                            e.preventDefault();
                            setFinal(movie.imdb_title_id)
                        }}>{movie.title}</button>
                    )) : <Loader />
                }
            </div>
            <h1>Recommendations...</h1>
            <div className="carousel">
                {
                    !loading2 ? movies.map((movie) => (
                        <Card key={movie.imdb_title_id} image={movie.poster_path} title={movie.title} />
                    )) : <Loader />
                }
            </div>
            
            
        </div>
    )
}

export default Search;
