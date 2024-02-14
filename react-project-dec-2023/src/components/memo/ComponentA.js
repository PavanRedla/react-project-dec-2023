import React from "react";

function ComponentA({ a }) {
  console.log("A Component rendered...");
  return <div>ComponentA - a value is {a}</div>;
}
export default React.memo(ComponentA);
