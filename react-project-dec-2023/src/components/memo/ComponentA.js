import React from "react";

function ComponentA({ a }) {
  console.log("A Component rendered...");
  return <div>ComponentA - a value is {a}</div>;
}
export default React.memo(ComponentA);

// ComponentA is memo component hence it only gets rerendered if state variable {a} passed to it gets modified in parent component (MemoParent.js)

// React.memo is a higher order predefined function as it takes component (ComponentA) as an argument.
