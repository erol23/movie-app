import React, { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

const IMG_API = "https://image.tmdb.org/t/p/w1280";

const setVoteClass = (vote) => {
  if (vote >= 8) {
    return "green";
  } else if (vote >= 6) {
    return "orange";
  } else {
    return "red";
  }
};

const MovieCard = ({ title, poster_path, overview, vote_average }) => {
  const { curentUser } = useContext(AuthContext);

  return (
    <div className="movie">
      <img src={IMG_API + poster_path} alt="movie poster" />
      <div className="movie-info">
        <h3>{title}</h3>
        {curentUser ? (
          <span className={`tag ${setVoteClass(vote_average)}`}>
            {vote_average}
          </span>
        ) : null}
      </div>
      {curentUser ? (
        <div className="movie-over">
          <h2>Overview</h2>
          <p>{overview}</p>
        </div>
      ) : null}
    </div>
  );
};

export default MovieCard;
