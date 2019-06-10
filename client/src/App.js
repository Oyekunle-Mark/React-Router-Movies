import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import SavedList from "./Movies/SavedList";
import MovieList from "./Movies/MovieList";
import Movie from "./Movies/Movie";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      savedList: []
    };
  }

  addToSavedList = movie => {
    const { savedList } = this.state;
    savedList.push(movie);
    this.setState({ savedList });
  };

  render() {
    const { savedList } = this.state;

    return (
      <Router>
        <div>
          <SavedList list={savedList} />

          <Route exact path="/" component={MovieList} />
          <Route path="/movies/:id" component={Movie} />
        </div>
      </Router>
    );
  }
}
