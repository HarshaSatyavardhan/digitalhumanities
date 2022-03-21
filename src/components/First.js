import React, { useState } from "react";
import Chart from "react-google-charts";
import { data } from "./csvjson";

// const sankeyData = [];
// var sank = [];
// var output = data.map(function (obj) {
//   return Object.keys(obj).slice(1).map(function (key) {
//     return obj[key];
//   });
// });

const First = () => {
  const [count, setCount] = useState(" ");
  console.log(count);
  const submitValue = () => {
    const details = {
      count: count,
    };
    console.log(count);
  };

  const sankeyData = [
    ["From", "To", "Weight"],
    ["since", "None", 23],
    ["gallery", "None", 2],
    ["turnofthetwentiethcentury", "None", 1],
    ["turn", "None", 45],
    ["likedis", "None", 1],
    ["profound", "Male", 1],
    ["Semblance", "None", 1],
    ["Africans", "Male", 2],
    ["Guided", "None", 1],
    ["Golinski", "None", 1],
    ["implosion", "Male", 1],
    ["Searchs", "None", 1],
    ["concerning", "Female", 1],
    ["families", "Male", 2],
    ["series", "None", 21],
    ["undergoes", "Male", 2],
    ["Helen", "None", 2],
    ["overcoming", "Male", 1],
    ["mass", "Female", 2],
    ["Mori", "None", 1],
    ["positive", "None", 4],
    ["Utopian", "None", 1],
    ["travel", "None", 2],
    ["Condition", "Male", 1],
  ];

  sankeyData.splice(count);

  return (
    <div>
      <h2>React Simple Sankey Chart Example</h2>
      <Chart
        width={700}
        height={"350px"}
        chartType="Sankey"
        loader={<div>Loading Chart</div>}
        data={sankeyData}
        rootProps={{ "data-testid": "1" }}
      />
      <div>
        <input type="text" onChange={(e) => setCount(e.target.value)} />
        <button onClick={submitValue}>SUBMIT</button>
      </div>
    </div>
  );
};

export default First;
