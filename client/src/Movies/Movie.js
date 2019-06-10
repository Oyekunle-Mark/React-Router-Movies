import React, { Component } from "react";
import Prop from "prop-types";
import axios from "axios";

import MovieCard from "./MovieCard";

export default class Movie extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movie: null
    };
  }

  componentDidMount() {
    const { id } = this.props.match.params;
    this.fetchMovie(id);
  }

  componentWillReceiveProps(newProps) {
    if (this.props.match.params.id !== newProps.match.params.id) {
      this.fetchMovie(newProps.match.params.id);
    }
  }

  fetchMovie = id => {
    axios
      .get(`http://localhost:5000/api/movies/${id}`)
      .then(response => {
        this.setState(() => ({ movie: response.data }));
      })
      .catch(error => {
        console.error(error);
      });
  };

  saveMovie = () => {
    const { handleSave } = this.props;
    handleSave(this.state.movie);
  };

  render() {
    const { movie } = this.state;

    if (!movie) {
      return <div>Loading movie information...</div>;
    }

    return (
      <div className="save-wrapper">
        <MovieCard movie={movie} />
        <div onClick={this.saveMovie} className="save-button">
          Save
        </div>
      </div>
    );
  }
}

Movie.propTypes = {
  handleSave: Prop.func.isRequired
};
