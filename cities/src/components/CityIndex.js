import React from "react";
import { Link } from "react-router-dom";
import CitySorts from "./CitySorts";
import "./Styling.css";

class CityIndex extends React.Component {
  sortCities = () => {
    switch (this.props.location.pathname) {
      case "cities/city":
        return this.props.cities.sort((a, b) => {
          return a.city.localeCompare(b.city);
        });
      case "cities/country":
        return this.props.cities.sort((a, b) => {
          return a.country.localeCompare(b.country);
        });
      default:
        return this.props.cities;
    }
  };

  render() {
    const renderedCities = this.sortCities();
    return (
      <div>
        <table border="1" className="table">
          <thead>
            <tr>
              <th>
                <Link to={`/cities/id`}>ID </Link>
              </th>
              <th>
                <Link to={`/cities/city`}>City </Link>
              </th>
              <th>
                <Link to={`/cities/country`}>Country </Link>
              </th>
              <th>
                <Link to={`/cities/allbuildings`}>All Buildings </Link>
              </th>
              <th>
                <Link to={`/cities/100m+`}> 100m+ </Link>
              </th>
              <th>
                <Link to={`/cities/150m+`}> 150m+ </Link>
              </th>
              <th>
                <Link to={`/cities/200m+`}> 200m+ </Link>
              </th>
              <th>
                <Link to={`/cities/300m+`}> 300m+ </Link>
              </th>
              <th>
                <Link to={`/cities/telecomtowers`}> Telecom Towers </Link>
              </th>
              <th>
                <Link to={`/cities/allstructures`}> All Structures </Link>
              </th>
            </tr>
          </thead>
          <tbody>
            {renderedCities.map(city => {
              return (
                <tr>
                  <td>{city.client_city_id} </td>
                  <td>
                    <h5>{city.city}</h5>
                  </td>
                  <td>
                    <h5>{city.country}</h5>
                  </td>
                  <td>{city.all_buildings}</td>
                  <td>{city.one_hundred}</td>
                  <td>{city.one_hundred_fifty}</td>
                  <td>{city.two_hundred}</td>
                  <td>{city.three_hundred}</td>
                  <td>{city.telecom_towers}</td>
                  <td>{city.all_structures}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
        <CitySorts cities={this.props.cities} />
      </div>
    );
  }
}

export default CityIndex;
