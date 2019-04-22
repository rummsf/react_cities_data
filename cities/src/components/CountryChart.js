import React from "react";
import { Bar } from "react-chartjs-2";

const CountryChart = props => {
  const chosenCountryCities = props.cities.filter(
    city => city.country === props.match.params.country
  );

  let chartData = {
    labels: chosenCountryCities.map(city => city.city),
    datasets: [
      {
        data: chosenCountryCities.map(city => city.all_structures),
        label: "total number of structures",
        backgroundColor: "rgba (155, 135, 190)"
      }
    ]
  };

  return (
    <div className="chart">
      Country
      <Bar data={chartData} options={{}} />
    </div>
  );
};

export default CountryChart;
