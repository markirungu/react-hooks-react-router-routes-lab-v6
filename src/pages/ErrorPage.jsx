import React from "react";
import NavBar from "../components/NavBar";

function ErrorPage() {
  return (
    <>
      <NavBar />  {/* KEEP this one! ErrorPage needs NavBar since it's outside App */}
      <h1>Oops! Looks like something went wrong.</h1>
    </>
  );
}

export default ErrorPage;