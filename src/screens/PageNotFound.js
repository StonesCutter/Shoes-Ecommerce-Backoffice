import React from "react";
import "../../src/styles/pageNotFound/pageNotFound.css";
import { Link } from "react-router-dom";
import { Button } from "@mui/material";

function PageNotFound(props) {
  return (
    <div className="pageNotFound-container">
      <div className="error404-container">
        <h1 className="text-404">404</h1>
        <p className="subText-404">Page not found</p>
        <Button variant="contained" color="primary" className="button-404">
          <Link to="/dashboard" className="link-404">
            Go back to home
          </Link>
        </Button>
      </div>
    </div>
  );
}

export default PageNotFound;
