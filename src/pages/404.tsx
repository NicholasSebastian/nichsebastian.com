import React from "react"
import { Link } from "gatsby";
import SEO from "../components/seo";

const PageNotFound = () => {
  return (
    <>
      <SEO title="Page not Found" />
      <div id="e404">
        <h2>Error 404</h2>
        <h1>OOPS</h1>
        <h3>It seems the page you are looking for doesn't exist.</h3>
        <Link to="/">Return to Home</Link>
      </div>
    </>
  );
}

export default PageNotFound;