import logo from "./logo.svg";

import Multi from "./Component/MulticheckDropdown";
import React, { useState } from "react";

const data = [
  {
    display: " All",
    value: "",
  },
  {
    display: " Apple",
    value: "Apple",
  },
  { display: "Orange", value: "Orange" },
];
let value = "";
const getSelectedValue = (childValue, placeholder) => {
  console.log("value", childValue);
  value = childValue;
};
function App() {
  // const [status, setstatus] = useState("");
  return (
    <div className="App">
      {value}
      <div className="" style={{ width: "" }}>
        <Multi
          Option={data}
          getSelectedValue={getSelectedValue}
          fontFamily={"monospace"}
          IconColor={"rgb(100 37 84)"}
        ></Multi>
      </div>
    </div>
  );
}

export default App;
