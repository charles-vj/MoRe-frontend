
import React, {useEffect, useState} from 'react'
import './Trending.css'
import Card from '../Card/Card'
import Loader from './Loader'

function Trending() {
    const [trendings,setTrendings] = useState([]);
const [loading3, setLoading3] = useState(false)
    useEffect(() => {
        getTrendings();
        
    }, [])
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
        <div className="containers">
            <h1 className="trending-header">Trending Now!</h1>
            <div className="carousel bl">
                {
                    trendings.map((trending) => (
                        <Card key ={trending.backdrop_path} image={"https://image.tmdb.org/t/p/w500" + trending.poster_path} title={trending.title} />
                    ))
                }
            </div>
        </div>
    )
}

export default Trending
