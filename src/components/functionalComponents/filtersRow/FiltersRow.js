import React from "react";
import AddIcon from "@mui/icons-material/Add";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";
import "./filtersRow.css";

function filtersRow(props) {
  return (
    <div className="filtersRow-container">
      <h3>{props.label}</h3>
      <div className="filters-container align-center">
        {/* <h3>Searchbar</h3>
        <h3>Filtro</h3> */}
        <Link to={props.addUrl}>
          <Button variant="contained" disableElevation startIcon={<AddIcon />}>
            {props.addLabel}
          </Button>
        </Link>
      </div>
    </div>
  );
}

export default filtersRow;
