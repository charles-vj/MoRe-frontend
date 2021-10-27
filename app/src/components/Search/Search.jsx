import React, {useEffect, useState} from 'react'
import './Search.css'
import Select from 'react-select'
import {options} from './Data'
import MenuList from './MenuList'
import { createFilter } from "react-select";
import Card from '../Card/Card'

function Search() {

    const [input,setInput] = useState("");
    const [search,setSearch] = useState("tt0458525");
    const [movies,setMovies] = useState([]);

    useEffect(() => {
        getRecommendedMovies();
    }, [search])

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
            const response = await fetch(`https://more-movie-recommendation.herokuapp.com/recommend-movie/${search}?limit=10`);
            const data = await response.json();
            setMovies(data.result);
            console.log(data.result);
            
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
                    movies.map((movie) => (
                        <Card key={movie.imdb_title_id} image={movie.poster_path} title={movie.title} />
                    ))
                }
            </div>
            <div className="carousel"></div>
        </div>
    )
}

export default Search;
