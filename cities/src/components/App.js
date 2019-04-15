import React, { Component } from "react";
import { Router, Switch, Route } from "react-router-dom";
import CityIndex from "./CityIndex";
import Header from "./Header";
import SearchBar from "./SearchBar";
import CityShow from "./CityShow";
import history from "../history";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cities: [],
      searchQuery: ""
    };
  }

  componentDidMount = () => {
    fetch("http://localhost:3001/api/v1/cities")
      .then(resp => resp.json())
      .then(cities => this.setState({ cities }));
  };

  changeSearchQuery = searchQuery => {
    this.setState({
      searchQuery
    });
  };

  render() {
    return (
      <div className="ui-container">
        <Router history={history}>
          <Header />

          <SearchBar
            changeSearchQuery={this.changeSearchQuery}
            searchQuery={this.searchQuery}
          />

          <div>
            <Switch>
              <Route
                path="/cities/show/:city"
                // component={CityShow}
                render={props => (
                  <CityShow {...props} cities={this.state.cities} />
                )}
              />
              <Route
                path="/cities/:sort"
                render={props => (
                  <CityIndex
                    {...props}
                    cities={this.state.cities}
                    searchQuery={this.state.searchQuery}
                  />
                )}
              />
            </Switch>
          </div>
        </Router>
      </div>
    );
  }
}
export default App;
