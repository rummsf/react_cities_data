import React from "react";
import { Link } from "react-router-dom";
import "./Styling.css";

class CityIndex extends React.Component {
  sortCities = () => {
    let sortedCities = [
      ...this.props.cities.filter(
        city =>
          city.city.toLowerCase().includes(this.props.searchQuery) ||
          city.country.toLowerCase().includes(this.props.searchQuery)
      )
    ];
    switch (this.props.match.params.sort) {
      case "cities":
        return sortedCities;
      case "city":
        sortedCities = sortedCities.sort((a, b) => {
          return a.city.localeCompare(b.city);
        });
        break;
      case "country":
        sortedCities = sortedCities.sort((a, b) => {
          return a.country.localeCompare(b.country);
        });
        break;
      case "id":
        sortedCities = sortedCities.sort((a, b) => {
          return a.client_city_id - b.client_city_id;
        });
        break;
      case "totalbuildings":
        sortedCities = sortedCities.sort((a, b) => {
          return a.all_buildings - b.all_buildings;
        });
        break;
      case "totalstructures":
        sortedCities = sortedCities.sort((a, b) => {
          return a.all_buildings - b.all_buildings;
        });
        break;

      default:
        return sortedCities;
    }
    return sortedCities;
  };

  render() {
    const sortedCities = this.sortCities();
    return (
      <div>
        <div>
          <h3>Search by City or Country </h3>
          <input
            onChange={event => this.props.changeSearchQuery(event.target.value)}
          />
        </div>
        <br />
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
                <Link to={`/cities/totalbuildings`}>Total Buildings </Link>
              </th>

              <th>
                <Link to={`/cities/totalstructures`}> Total Structures </Link>
              </th>
            </tr>
          </thead>
          <tbody>
            {sortedCities.map(city => {
              return (
                <tr key={city.city}>
                  <td>{city.client_city_id} </td>
                  <td>
                    <Link to={`/cities/show/${city.city}`}>{city.city}</Link>
                  </td>
                  <td>
                    <Link to={`/cities/show/chart/${city.country}`}>
                      {city.country}
                    </Link>
                  </td>
                  <td>{city.all_buildings}</td>
                  <td>{city.all_structures}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    );
  }
}

export default CityIndex;
