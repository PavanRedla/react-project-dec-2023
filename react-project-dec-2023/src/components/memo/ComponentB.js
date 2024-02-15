import React from "react";

function ComponentB({ b }) {
  console.log("B Component rendered...");
  return <div>ComponentB - b value is {b}</div>;
}
export default React.memo(ComponentB);


// ComponentB is memo component hence it only gets rerendered if state variable {b} passed to it gets modified in parent component (MemoParent.js)