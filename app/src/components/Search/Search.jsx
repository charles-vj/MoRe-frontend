import React, {useEffect, useState} from 'react'
import './Search.css'
import Card from '../Card/Card'
import INDICES from '../../indices.json'
import stringComparison from 'string-comparison'
import { stringSimilarity } from "string-similarity-js";
import { PHRASE } from '../../phrases'
import { sevs } from '../../severities'
import { imageArray } from '../../imagelist'
import Loader from './Loader'
import Btn from '../Accessories/Btn';

function Search() {

    const [input,setInput] = useState("Leak");
    const [search,setSearch] = useState("Mission: impossible");
    const [caught,setCaught] = useState(true)
    const [final,setFinal] = useState()
    const [movies,setMovies] = useState([1,86,"FIRE"]);

    const [searches,setSearches] = useState([]);
    const [trendings,setTrendings] = useState([]);
    const [loading, setLoading] = useState(false)
    const [loading3, setLoading3] = useState(false)
    const [loading2, setLoading2] = useState(false)
    const severity = [];

    

    useEffect(() => {
        getSearchedMovies();
        
    }, [search])
    useEffect(() => {
        // getRecommendedMovies();
        
    }, [final])
    useEffect(() => {
        // getTrendings();
        
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
            // const response = INDICES;
            let cos = stringComparison.jaccardIndex
            let max=0;
            let maxi;
            for (let i = 0; i < PHRASE.length; i++) {
                let ex = cos.similarity(input,PHRASE[i])
                if(ex>max) {
                    max = ex;
                    maxi=i;
                }
            }
            if (max<0.7) {
                setCaught(false);
            } else {
                setCaught(true);
            }
            let description
            // console.log(PHRASE[0])
            console.log(PHRASE[maxi])
            console.log(sevs[maxi])
            console.log(max,maxi,sevs[maxi],PHRASE[maxi] )
            if(sevs[maxi]==1) {
                description="There is a probability of incident with minimal monetary loss"
            }
            if(sevs[maxi]==2) {
                description="Medium to high monetary loss expected"
            }
            if(sevs[maxi]==3) {
                description="ALERT : High monetary loss expected"
            }
            setMovies([max,maxi,PHRASE[maxi],description])
            // console.log(imageArray[maxi].src)
            // console.log(movies)
            // const data = await response.json();
            // setSearches(data);
            // setLoading(false);
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
            <h1 className="header">Enter the type of issue</h1>
            <div className="search-sec">
            <form action="submit" onSubmit={handleSubmit}>
                <input placeholder="Movie Name" value={input} onChange={updateInput} className="select"/>
                <button className="submit">&#8594;</button>
            </form>
            </div>
            
            {/* {searches.length > 0 && !loading ? <h1 className="invalid">Did you mean any of these movies ?</h1> : <h1 className="invalid"></h1>}
            <div className="container">
                {
                    searches.length < 1 && !loading && <div className="invalid">This might be a totally new issue</div>
                }
                {
                    !loading ? searches.slice(0,10).map((movie) => (
                        <button className="btn" onClick={(e) => {
                            e.preventDefault();
                            setFinal(movie.imdb_title_id)
                        }}>{movie.title}</button>
                    )) : <Loader />
                }
            </div> */}
            
            <div className="carousel">
                {
                        !caught && <Card key={movies[0]} title={"NULL"} desc = {"No incident recorded"} />
}{        
                        caught && <Card key={movies[0]} image = {`./images/${movies[1]}.png`} title={INDICES[movies[2]]} desc = {movies[3]} />
                    // <Loader />
                }
            </div>
            
            
        </div>
    )
}

export default Search;
