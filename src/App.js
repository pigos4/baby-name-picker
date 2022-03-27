import React, { useState } from "react";
import "./App.css";
import names from "./babyNamesData.json";
import RenderNames from "./component/RenderNames";

const filterNames=(typedValue)=>names.filter((v) =>
    v.name.toLowerCase().includes(typedValue.toLowerCase())
  );


function App() {
  const [arrayOfNames, setArrayOfNames] = useState(names);

  return (
    <div className="">Search:
      <input
        type="text"
        onChange={(e) => {
          setArrayOfNames(filterNames(e.target.value));
        }}
      ></input>
      <div className="flex">
        <RenderNames names={arrayOfNames} />
      </div>
    </div>
  );
}

export default App;
