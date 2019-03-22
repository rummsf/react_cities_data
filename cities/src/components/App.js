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
                  <CityIndex {...props} cities={this.state.cities} />
                )}
              />
              <Route
                path="cities/city"
                render={props => (
                  <CityIndex {...props} cities={this.state.cities} />
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

// import React from "react";
// import { Router, Route, Switch } from "react-router-dom";

// import BookList from "../containers/BookList";
// import BookShow from "./books/BookShow";
// import BookCreate from "./books/BookCreate";
// import WriterList from "../containers/WriterList";
// import WriterShow from "./writers/WriterShow";
// import Header from "./Header";
// import HomePage from "./HomePage";
// // import Search from "./Search";
// import history from "../history";

// const App = () => {
//   return (
//     <div className="ui container">
//       <Router history={history}>
//         <div>
//           <Header />
//           {/* <Search /> */}
//           <Switch>
//             <Route path="/" exact component={HomePage} />
//             <Route path="/books" exact component={BookList} />
//             <Route path="/books/new" exact component={BookCreate} />
//             {/* <Route path="/books/edit/:id" exact component={BookEdit} /> */}
//             {/* <Route path="/books/delete/:id" exact component={BookDelete} /> */}
//             <Route path="/books/:id" exact component={BookShow} />
//             <Route path="/writers" exact component={WriterList} />
//             <Route path="/writers/:id" exact component={WriterShow} />
//           </Switch>
//         </div>
//       </Router>
//     </div>
//   );
// };

// export default App;
