import React, {useEffect, useState} from 'react'
import './Search.css'
import Select from 'react-select'
import {options} from './Data'
import MenuList from './MenuList'
import { createFilter } from "react-select";
import Card from '../Card/Card'
import Button from '../Accessories/Button/Button'

function Search() {

    const [input,setInput] = useState("");
    const [search,setSearch] = useState("Mission: impossible");
    const [final,setFinal] = useState("tt0376994")
    const [movies,setMovies] = useState([]);
    const [searches,setSearches] = useState([]);
    const [trendings,setTrendings] = useState([]);

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
            const response = await fetch(`https://more-movie-recommendation.herokuapp.com/recommend-movie/${final}?limit=10`);
            const data = await response.json();
            setMovies(data.result);
            console.log(data.result);
            
        }
        catch {

        }
      }
    const getSearchedMovies = async () => {
        try {
            const response = await fetch(`https://more-movie-recommendation.herokuapp.com/get-movies-from-title/${search}`);
            const data = await response.json();
            setSearches(data);
            
            
        }
        catch {

        }
      }
    const getTrendings = async () => {
        try {
            const r = await fetch(`https://api.themoviedb.org/3/trending/movie/week?api_key=86b01c870d192d9c90bfbfbc18d9d37a`);
            const d = await r.json();
            setTrendings(d.results);
            
            
        }
        catch {

        }
      }
      

    return (
        <div className="search">
            <h1>Search and browse movies!</h1>
            <form action="submit" onSubmit={handleSubmit}>
                <input placeholder="Movie Name" value={input} onChange={updateInput} className="select"/>
                <button className="submit">&#8594;</button>
            </form>
            <div className="carousel">
                {
                    searches.length >0 && searches.map((movie) => (
                        <button onClick={(e) => {
                            e.preventDefault();
                            setFinal(movie.imdb_title_id)
                        }}>{movie.title}</button>
                    ))
                }
                {
                    searches.length < 1 && <h1>cant find shit</h1>
                }
            </div>
            <h1 className="trending-header">Movies similar to {search}</h1>
            <div className="carousel">
                {
                    movies.map((movie) => (
                        <Card key={movie.imdb_title_id} image={movie.poster_path} title={movie.title} />
                    ))
                }
            </div>
            <h1 className="trending-header">Trending Now!</h1>
            <div className="carousel bl">
                {
                    trendings.map((trending) => (
                        <Card key ={trending.backdrop_path} image={"https://image.tmdb.org/t/p/w500" + trending.poster_path} title={trending.title} />
                    ))
                }
            </div>
            <div className="carousel"></div>
        </div>
    )
}

export default Search;
