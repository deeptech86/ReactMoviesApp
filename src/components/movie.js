import React from "react";
import "./movie.css";
const BASE_IMAGE = "https://image.tmdb.org/t/p/w1280/";

function movie({ title, id, overview, rating, poster }) {
  return (
    <div>
      <div id={id} className="movie_container">
        <div className="poster">
          <img src={BASE_IMAGE + poster} alt={title} />
        </div>
        <div className="details">
          <h4>{title}</h4>
          <span>{rating}</span>
        </div>
        <div className="description">
          <h3>Overview:</h3>
          <p>{overview}</p>
        </div>
      </div>
    </div>
  );
}

export default movie;
