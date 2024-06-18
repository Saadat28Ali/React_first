import React from "react";
import {useEffect, useState} from "react";
import "./app.css";
import SearchIcon from "./search.svg";

import MovieCard from "./MovieCard.jsx";

// ce06fc00
const api_url = "http://www.omdbapi.com/?i=tt3896198&apikey=ce06fc00";

const App = () => { 

    const [movies, setMovies] = useState([]);
    const [search_term, setSearchTerm] = useState("");
 
    const searchMovies = async (title) => {
        const response = await fetch(api_url + "&s=" + title);
        const data = await response.json();
        // console.log(data);
        setMovies(data.Search);
    };

    useEffect(() => {
        searchMovies(search_term);
    }, []);

    return (
        <div className="app">
            <h1> Movieland </h1>

            <div className="search">
                <input type={"text"} placeholder={"Search for movies..."} value={search_term} onChange={(e) => {
                    setSearchTerm(e.target.value);
                }}/>
                <img src={SearchIcon} alt={"search"} onClick={() => {
                    searchMovies(search_term);
                }} />
            </div>
            
            {
                movies?.length > 0 ? (
                    <div className="container">
                        {
                            movies.map((movie) => {
                                return (<MovieCard movie_obj={movie}/>)
                            })
                        }
                    </div>
                ) : (
                    <div className="empty">
                        <h2> No movies found </h2>
                    </div>
                )
            }
            
        </div>
    );
}

export default App;