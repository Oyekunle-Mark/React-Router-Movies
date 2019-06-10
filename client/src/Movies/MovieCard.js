import React from "react";
import Prop from "prop-types";

const MovieCard = ({ movie }) => {
  const { title, director, metascore, stars } = movie;

  return (
    <div className="movie-card">
      <h2>{title}</h2>
      <div className="movie-director">
        Director: <em>{director}</em>
      </div>
      <div className="movie-metascore">
        Metascore: <strong>{metascore}</strong>
      </div>
      <h3>Actors</h3>

      {stars.map(star => (
        <div key={star} className="movie-star">
          {star}
        </div>
      ))}
    </div>
  );
};

MovieCard.propTypes = {
  movie: Prop.shape({
    title: Prop.string.isRequired,
    director: Prop.string.isRequired,
    metascore: Prop.number.isRequired,
    stars: Prop.arrayOf(Prop.string).isRequired
  }).isRequired
};

export default MovieCard;
