import React, { Component } from "react";
import Prop from "prop-types";
import { Link, NavLink } from "react-router-dom";

export default class SavedList extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { list } = this.props;
    return (
      <div className="saved-list">
        <h3>Saved Movies:</h3>
        {list.map(movie => (
          <NavLink
            key={movie.id}
            to={`/movies/${movie.id}`}
            activeStyle={{
              fontWeight: "bold",
              color: "red"
            }}
          >
            <span className="saved-movie">{movie.title}</span>
          </NavLink>
        ))}

        <Link to="/">
          <div className="home-button">Home</div>
        </Link>
      </div>
    );
  }
}

SavedList.propTypes = {
  list: Prop.arrayOf(Prop.object).isRequired
};
