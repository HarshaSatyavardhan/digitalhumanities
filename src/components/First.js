import React from "react";
import Chart from "react-google-charts";
import { data } from "./csvjson";

// const sankeyData = [
// var sank = [];
// var output = data.map(function (obj) {
//   return Object.keys(obj)
//     .slice(1)
//     .map(function (key) {
//       return obj[key];
//     });
// });

function convertFormat(data) {
  if (data.length === 0) return [];
  let new_data = [];
  let key_data = [];
  Object.keys(data[0]).map((key) => {
    if (key !== "id") key_data.push(key);
  });
  new_data.push(key_data);

  data.map((item) => {
    let new_item = [];
    Object.values(item).map((value, index) => {
      if (index !== 0) new_item.push(value);
    });
    new_data.push(new_item);
  });
  return new_data;
}

// console.log(convertFormat(data));

const first = () => {
  return (
    <div>
      <h2>React Simple Sankey Chart Example</h2>
      <Chart
        width={1000}
        height={"550px"}
        chartType="Sankey"
        loader={<div>Loading data</div>}
        data={convertFormat(data)}
        rootProps={{ "data-testid": "1" }}
      />
    </div>
  );
};

export default first;
