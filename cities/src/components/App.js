import React, { Component } from "react";
import { Router, Route } from "react-router-dom";
import CityIndex from "./CityIndex";
import Header from "./Header";
import history from "../history";

class App extends Component {
  state = {
    cities: []
  };

  componentDidMount = () => {
    fetch("http://localhost:3001/api/v1/cities")
      .then(resp => resp.json())
      .then(cities => this.setState({ cities }));
  };

  render() {
    return (
      <div className="ui-container">
        <Header />
        <Router history={history}>
          <div>
            <Route
              path="/cities/:sort"
              render={props => (
                <CityIndex {...props} cities={this.state.cities} />
              )}
            />
          </div>
        </Router>
      </div>
    );
  }
}
export default App;
