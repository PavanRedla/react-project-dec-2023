import React, { useState } from "react";

export default function Addition() {
  const [firstNo, setFirstNo] = useState[0];
  const [secondNo, setsecondNo] = useState[0];
  const [sum, setSum] = useState[0];
  return (
    <>
      <h2>Adding two Numbers</h2>
      <input type="text" placeholder="Enter First Number" />
      {/* Enter First Number:
      </input> */}
      <input type="number" placeholder="Enter First Number">
        Enter Second Number:
      </input>
    </>
  );
}
