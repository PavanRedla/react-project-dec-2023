import React, { useState } from "react";
import "./FormDataObjStyle.css";

export default function FormDataObj() {
  let [userObj, setuserObj] = useState({
    fname: "",
    lname: "",
    age: "",
    address: "",
  });

  let changeHandler = (e) => {
    // let name = e.target.name;
    // let val = e.target.value;
    setuserObj({ ...userObj, [e.target.name]: e.target.value });
  };

  const submitHandler = (e) => {
    e.preventDefault();
    console.log(userObj);
  };
  return (
    <>
      <form onSubmit={(e) => submitHandler(e)}>
        First Name:
        <input name="fname" onChange={(e) => changeHandler(e)} />
        Last Name: <input name="lname" onChange={(e) => changeHandler(e)} />
        <br />
        <br />
        Age:{" "}
        <input name="age" type="number" onChange={(e) => changeHandler(e)} />
        <br />
        <br />
        Address: <textarea name="address" onChange={(e) => changeHandler(e)} />
        <br />
        <br />
        <button>Submit</button>
      </form>
      <p>
        {userObj.fname} {userObj.lname} is {userObj.age} years old, staying at{" "}
        {userObj.address}
      </p>
    </>
  );
}
