import React, {useEffect, useState} from 'react'
import './Search.css'
import Select from 'react-select'
import {options} from './Data'
import MenuList from './MenuList'
import { createFilter } from "react-select";

function Search() {

    const [input,setInput] = useState("");
    const [search,setSearch] = useState("");
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
            const response = await fetch(`https://more-movie-recommendation.herokuapp.com/recommend-movie/tt0458525?limit=10`);
            const data = await response.json();
            setMovies(data.result);
            console.log(data.result);
            console.log("Hi");
        }
        catch {

        }
      }
      

    return (
        <div className="search">
            <h1>Search and browse movies!</h1>
            <form action="submit" onSubmit={handleSubmit}>
                <Select components = {MenuList} options={options} filterOption={null} placeholder="Movie Name" value={input} onChange={updateInput} className="select"/>
                <button className="submit">&#8594;</button>
            </form>
            <div className="carousel"></div>
            <div className="carousel"></div>
        </div>
    )
}

export default Search;
