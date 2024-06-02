import React from "react";

const SingleCard = ({ movie, handleWatchTime }) => {

  return (
    <div style={{"height": "450px"}} className="movie-card card col-md-5 p-3 mb-2 mb-md-0 text-center bg-light">
      <div className="movie-poster m-auto">
        <img style={{"height": "150px"}}  className="" src={movie.poster} alt="Poster"/>
      </div>
      <h3>{movie.movieName}</h3>
      <h6>{movie.director}</h6>
      <p>{movie.description}</p>
      <div className="timeAndRating d-flex justify-content-around ">
        <p>WatchTime: {movie.watchTime}</p>
        <p>Rating :{movie.imdbRating}</p>
      </div>
      <button
        onClick={() => handleWatchTime(movie.watchTime)}
        className="btn btn-info w-75 m-auto"
      >
        Book Now
      </button>
    </div>
  );
};

export default SingleCard;
