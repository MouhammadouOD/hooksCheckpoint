import React from "react";
import { Link } from "react-router-dom";

function MovieCard({ title, description, posterUrl, rating }) {
  return (
    <div className="m-4">
      <Link to={`/${title}`} >
        <img src={posterUrl} alt="film" width="300px" height="200px" />
        <h6>Title: {title}</h6>
        <h6>Description : {description}</h6>
        <h6>Rating : {rating}</h6>
      </Link>
    </div>
  );
}

export default MovieCard;
