import { React, useEffect, useState } from "react";

const MovieCard = ({ movie_obj }) => {
    // console.log("props: ", props);
    return (
        <div className="movie">
            <div>
                <p>{movie_obj.Year}</p>
            </div>
            <div>
                <img src={movie_obj.Poster !== "N/A" ? movie_obj.Poster : "https://via.paceholder.com/400"} alt={movie_obj.Title}></img>
            </div>

            <div>
                <span>{movie_obj.Type}</span>
                <h3>{movie_obj.Title}</h3>
            </div>
        </div>
    );
}

export default MovieCard;