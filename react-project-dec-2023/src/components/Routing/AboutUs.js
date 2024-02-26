import React from "react";
import { Link, useNavigate } from "react-router-dom";

export default function AboutUs() {
  const navigate = useNavigate();

  const goToHomePage = () => {
    console.log("Do Something......."); // Any Logic can be executed
    navigate("/home");
  };

  return (
    <>
      <h1>This is About Us Component</h1>
      <a href="/home">Go to Home page</a>
      <Link to="/home" className="m-1">
        go to Home
      </Link>
      <button onClick={goToHomePage}>Do Something & Go To Home</button>
      <button onClick={() => navigate(-1)}>Go Back</button>
      <button onClick={() => navigate(1)}>Go Next</button>
    </>
  );
}
