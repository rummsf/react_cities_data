import React, { Component } from "react";
import { Router, Route, Switch } from "react-router-dom";
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
            <Switch>
              <Route
                path="/cities"
                render={props => (
                  <CityIndex
                    {...props}
                    cities={this.state.cities}
                    // url={this.props.location.path}
                  />
                )}
              />
              <Route
                path="cities/city"
                render={props => (
                  <CityIndex
                    {...props}
                    cities={this.state.cities}
                    // url={this.props.location.path}
                  />
                )}
              />

              {/* <Route path="/city" exact component={City} />
              <Route path="/country" exact component={Country} />
              <Route path="/allbuildings" exact component={AllBuildings} />
              <Route path="/onehundred" exact component={OneHundred} />
              <Route path="/onehundredfifty" exact component={OneHundredFifty} />
              <Route path="/twohundred" exact component={TwoHundred} />
              <Route path="/threehundred" exact component={ThreeHundred} />
              <Route path="/telecomtowers" exact component={TelecomTowers} />
              <Route path="/allstructures" exact component={AllStructures} /> */}
            </Switch>
          </div>
        </Router>
      </div>
    );
  }
}
export default App;
