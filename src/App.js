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
    <div className="">
      <input
        type="text"
        onChange={(e) => {
          setArrayOfNames(filterNames( e.target.value));
        }}
      ></input>
      <RenderNames names={arrayOfNames} />
    </div>
  );
}

export default App;
